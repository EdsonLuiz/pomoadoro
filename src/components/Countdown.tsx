import React, { useContext, useEffect, useState } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { Button } from "./Button";
import { Actions } from "./interfaces/Actions";


export function Countdown() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
  } = useContext(CountdownContext);


  const [minutesLeft, minutestRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondstRight] = String(seconds).padStart(2, '0').split('')


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


      <Button />
      
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

