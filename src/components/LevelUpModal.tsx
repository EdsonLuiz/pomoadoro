import {ReactNode, useContext} from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'

interface InternalComponentProps {
  children: ReactNode
}

export function LevelUpModal() {
  const {level, closeLevelUpModal} = useContext(ChallengeContext)

  return (
    <Overlay>
      <Container>
        <header 
          className="h-full mb-4 font-semibold text-indigo-500 bg-center bg-no-repeat bg-contain text-9xl bg-levelup">
          {level}
        </header>
        <strong className="inline-block mt-6 text-4xl text-blueGray-700">
          Parabéns
        </strong>
        <p className="mt-1 text-xl text-warmGray-500">
          Você alcançou um novo level!
        </p>
        <button 
          className="absolute bg-transparent right-1 top-1"
          type="button" 
          onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="um X para fechar o modal"/>
        </button>
      </Container>
    </Overlay>
  )
}

const Overlay = ({children}: InternalComponentProps) => (
  <div className="fixed flex items-center justify-center bg-gray-200 bg-opacity-50 -inset-0">
    {children}
  </div>
)

const Container = ({children}: InternalComponentProps) => (
  <div className="relative w-full max-w-sm px-12 py-8 text-center bg-white rounded-md shadow-lg">
    {children}
  </div>
)