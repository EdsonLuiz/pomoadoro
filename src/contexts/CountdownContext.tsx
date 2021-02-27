import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Actions } from "../components/interfaces/Actions";
import { ChallengeContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number,
  seconds: number,
  hasFinished: boolean,
  isActive: boolean,
  startCountdown(): void,
  resertCountdown(): void,
  countdownActions(): Actions
}
interface CountdownProviderProps {
  children: ReactNode
}

let countdownTimeOut: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownProviderProps) {

  const {startNewChallenge} = useContext(ChallengeContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false )

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountdown() {
    setIsActive(true)
  }

  function resertCountdown() {
    clearTimeout(countdownTimeOut)
    setIsActive(false)
    setTime(0.1 * 60)
    setHasFinished(false)
  }

  function countdownActions(): Actions {
    return {execute: {startCountdown, resertCountdown}}
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])


  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resertCountdown,
      countdownActions
    }}>
      {children}
    </CountdownContext.Provider>
  )
}