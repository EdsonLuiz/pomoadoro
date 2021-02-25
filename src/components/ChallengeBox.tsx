import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContext"
import { CountdownContext, CountdownProvider } from "../contexts/CountdownContext"
import { Challenge } from "./interfaces/Challenge"

interface ChanllengeBoxContainerProps {
  children: React.ReactNode,
  hasActiveChallenge: boolean
}

interface ButtonProps {
  failed?: boolean,
  buttonText: String
}

interface CycleProps {
  activeChallenge: Challenge
}

export function ChallengeBox() {
  const {activeChallenge} = useContext(ChallengeContext)

  const hasActiveChallenge = activeChallenge !== null

  return (
    <ChanllengeBoxContainer hasActiveChallenge={hasActiveChallenge} >
      {hasActiveChallenge
        ? <CycleDown activeChallenge={activeChallenge} />
        : <CycleUp activeChallenge={activeChallenge} />
      }
      

    </ChanllengeBoxContainer>
  )
}

function ChanllengeBoxContainer({children, hasActiveChallenge}: ChanllengeBoxContainerProps) {
  const notActive = `flex-col justify-center`

  const baseStyle = `${hasActiveChallenge ? 'justify-center' : notActive} flex items-center  h-full px-8 py-6 text-2xl font-medium bg-white rounded shadow-lg dark:bg-trueGray-700 dark:text-white font-inter text-warmGray-500`


  return (
  <div className={baseStyle}>
    {children}
  </div>
)}

const CycleUp = ({activeChallenge}: CycleProps) => (
  <div className="text-center">
    <strong>
      Finalize um ciclo para receber um desafio.
    </strong>
    <Content>
      <img className="mb-4" src="icons/level-up.svg" alt="seta verde apontando para o alto"/>
      "Avance de level completando desafios."
    </Content>
  </div>
)

const CycleDown = ({activeChallenge}: CycleProps) => (
  <div 
    className="flex flex-col items-center h-full"
  >
    <header className="w-full px-8 pb-6 text-xl font-semibold text-center text-indigo-500 border-b border-gray-200 dark:text-blue-400">
      Ganhe {activeChallenge.amount} xp
    </header>
    <main className="flex flex-col items-center justify-center flex-1">
      <img src={`icons/${activeChallenge.type}.svg`} alt="A mão de uma pessoa segurando um equipamento de levantamento de peso"/>
      <strong className="mb-4 text-3xl font-semibold dark:text-white text-blueGray-700 mt-7">
        Exercite-se
      </strong>
      <p className="text-base leading-relaxed dark:text-gray-100">
        {activeChallenge.description}
      </p>
    </main>
    <footer className="grid w-full grid-cols-2 gap-4">
      <Button failed buttonText="Falhei" />
      <Button buttonText="Completei" />
    </footer>
  </div>
)

const Title = ({children}) => (
  <strong className="">
    {children}
  </strong>
)

const Content = ({children}) => (
  <p className="flex flex-col items-center mt-12 text-base font-normal ">
    {children}
  </p>
)

function Button({buttonText, failed = false}: ButtonProps) {
  const {resetChallenge, completeChallenge} = useContext(ChallengeContext)
  const {resertCountdown} = useContext(CountdownContext)

  function handleChallengeSucceded() {
    completeChallenge()
    resertCountdown()
  }
  function handleChallengeFailed() {
    resetChallenge()
    resertCountdown()
  }

  return (
    <button
      className={`flex items-center justify-center h-12 text-base font-semibold text-white rounded-md transition-colors duration-200 ${failed ? 'bg-rose-500 hover:bg-rose-600' : 'bg-lime-500 hover:bg-lime-600'} `}
      onClick={failed ? handleChallengeFailed : handleChallengeSucceded}
      type="button"
    >
      {buttonText}
    </button>
  )
}