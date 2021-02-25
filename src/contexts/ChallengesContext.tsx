import {createContext, ReactNode, useState} from 'react'

import challenges from '../../challenges.json'
import { Challenge } from '../components/interfaces/Challenge'

interface ChallangeProviderProps {
  children: ReactNode
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

export function ChallangeProvider({children}: ChallangeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null as Challenge)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge: Challenge = challenges[randomChallengeIndex] as Challenge
    setActiveChallenge(challenge)
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