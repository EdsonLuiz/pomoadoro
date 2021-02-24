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
  experienceToNextLevel: number
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallangeProvider({children}: ChallangeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
          experienceToNextLevel
        }}>
      {children}
    </ChallengeContext.Provider>
  )
}