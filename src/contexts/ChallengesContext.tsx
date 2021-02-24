import {createContext, ReactNode, useState} from 'react'

import challenges from '../../challenges.json'

interface ChallangeProviderProps {
  children: ReactNode
}

interface Challenge {
    type: 'body' | 'eye' ;
    description: string;
    amount: number;
}

interface ChallengesContextData {
  level: number, 
  levelUp(): void, 
  currentExperience: number, 
  challengeCompleted: number, 
  startNewChallenge(): void,
  activeChallenge: Challenge
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallangeProvider({children}: ChallangeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)
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
          activeChallenge
        }}>
      {children}
    </ChallengeContext.Provider>
  )
}