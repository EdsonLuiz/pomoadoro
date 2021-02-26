import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { XpCounter } from "./XpCounter";

export function ExperienceBar() {
  const {currentExperience, experienceToNextLevel} = useContext(ChallengeContext)

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <header className="flex items-center h-0 col-span-full">
      <XpCounter>0 xp</XpCounter>
      <div className="relative flex-1 h-1 mx-6 bg-gray-200 rounded">
        <div className="h-1 bg-lime-500" style={{width: `${percentToNextLevel}%`}} >
          <span className="absolute transform -translate-x-1/2 dark:text-gray-100 text-warmGray-500 font-inter top-3 " style={{left: `${percentToNextLevel}%`}} >{currentExperience} xp</span>
        </div>
      </div>
      <XpCounter>{experienceToNextLevel} xp</XpCounter>
    </header>
  )
}