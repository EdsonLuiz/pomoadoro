import {createContext, ReactNode, useEffect, useState} from 'react'
import Cookies from 'js-cookie'

import challenges from '../../challenges.json'
import { Challenge } from '../components/interfaces/Challenge'

interface ChallangeProviderProps {
  children: ReactNode,
  level: number,
  challengeCompleted: number,
  currentExperience: number
}



interface ChallengesContextData {
  level: number, 
  levelUp(): void, 
  currentExperience: number, 
  challengeCompleted: number, 
  startNewChallenge(): void,
  activeChallenge: Challenge,
  resetChallenge(): void,
  experienceToNextLevel: number,
  completeChallenge(): void
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallangeProvider({children, ...rest}: ChallangeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null as Challenge)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengeCompleted', String(challengeCompleted))
  }, [level, currentExperience, challengeCompleted])

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge: Challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)

    new Audio('./notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🥳', {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const {amount} = activeChallenge

    let finalExperience = currentExperience + amount

    if(finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengeCompleted(challengeCompleted + 1)

  }

  return (
    <ChallengeContext.Provider 
      value={
        {
          level, 
          levelUp, 
          currentExperience, 
          challengeCompleted, 
          startNewChallenge,
          activeChallenge,
          resetChallenge,
          experienceToNextLevel,
          completeChallenge
        }}>
      {children}
    </ChallengeContext.Provider>
  )
}