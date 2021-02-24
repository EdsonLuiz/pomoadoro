import {createContext, ReactNode, useState} from 'react'



interface ChallangeProviderProps {
  children: ReactNode
}

interface ChallengesContextData {
  level: number, 
  levelUp(): void, 
  currentExperience: number, 
  challengeCompleted: number, 
  startNewChallenge(): void
}

export const ChallengeContext = createContext({} as ChallengesContextData)

export function ChallangeProvider({children}: ChallangeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    console.log("Start new Challenge")
  }

  return (
    <ChallengeContext.Provider 
      value={
        {
          level, 
          levelUp, 
          currentExperience, 
          challengeCompleted, 
          startNewChallenge 
        }}>
      {children}
    </ChallengeContext.Provider>
  )
}