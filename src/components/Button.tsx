import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";


export function Button () {

  const {resertCountdown, startCountdown, isActive, hasFinished} = useContext(CountdownContext);

  let cursor = hasFinished ? 'cursor-not-allowed' : ''
  const baseStyle = `${cursor} flex items-center justify-center flex-1 w-full h-16 mt-6 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded sm:h-20 sm:mt-8 sm:text-xl font-inter hover:bg-indigo-700`

  const executeAction = isActive ? resertCountdown : startCountdown
  return (
  <button 
    onClick={() => executeAction()}
    disabled={hasFinished}
    className={baseStyle }>
    {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
  </button>
)};