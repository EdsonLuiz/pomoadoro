import React, { useContext, useEffect, useState } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { Button } from "./Button";
import { Actions } from "./interfaces/Actions";

let countdownTimeOut: NodeJS.Timeout;


export function Countdown() {

  const {startNewChallenge} = useContext(ChallengeContext)

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false )

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutestRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondstRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resertCountdown() {
    clearTimeout(countdownTimeOut)
    setIsActive(false)
    setTime(0.1 * 60)
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

  return (
    <>
      <CountdownContainer>
        <Display>
          <Text>{minutesLeft}</Text>
          <Text>{minutestRight}</Text>
        </Display>

        <span className="mx-1 text-8xl dark:text-white">:</span>

        <Display>
          <Text>{secondsLeft}</Text>
          <Text>{secondstRight}</Text>
        </Display>
      </CountdownContainer>


      <Button hasFinished={hasFinished} isActive={isActive} actions={countdownActions()} />
      
    </>
  );
}

const CountdownContainer = ({children}) => (
  <div className="flex items-center font-semibold font-rajdhani text-blueGray-700">
    {children}
  </div>
)

const Display = ({children}) => (
  <div className="flex items-center flex-1 text-center bg-white rounded-md shadow-xl dark:bg-trueGray-700 justify-evenly text-8xl sm:text-9xl">{children}</div>
)

const Text = ({children}) => (
  <span className="flex-1 first:border-r-8 dark:text-white first:border-gray-100 dark:first:border-trueGray-800">
    {children}
  </span>
)

