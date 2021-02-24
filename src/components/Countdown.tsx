import { useEffect, useState } from "react";


export function Countdown() {

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutestRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondstRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  useEffect(() => {
    if(isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000);
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

      <Button execute={startCountdown}>
        Iniciar um ciclo
      </Button>
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

const Button = ({ children, execute }) => (
  <button 
    onClick={execute}
    className="flex items-center justify-center flex-1 w-full h-16 mt-6 text-lg font-semibold text-white transition-colors duration-300 bg-indigo-500 rounded sm:h-20 sm:mt-8 sm:text-xl font-inter hover:bg-indigo-700">
    {children}
  </button>
);