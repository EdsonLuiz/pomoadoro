import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { XpCounter } from "./XpCounter";

export function ExperienceBar() {
  const {currentExperience} = useContext(ChallengeContext)
  return (
    <header className="flex items-center col-span-full">
      <XpCounter>0 xp</XpCounter>
      <div className="relative flex-1 h-1 mx-6 bg-gray-200 rounded">
        <div className="w-6/12 h-1 bg-lime-500">
          <span className="absolute transform -translate-x-1/2 dark:text-gray-100 text-warmGray-500 font-inter top-3 left-1/2">{currentExperience} xp</span>
        </div>
      </div>
      <XpCounter>600 xp</XpCounter>
    </header>
  )
}