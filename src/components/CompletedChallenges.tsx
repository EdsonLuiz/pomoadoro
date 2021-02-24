import { useContext } from "react"
import { ChallengeContext } from "../contexts/ChallengesContext"

export function CompletedChallenges() {
  const {challengeCompleted} = useContext(ChallengeContext)
  return (
    <div className="flex items-center justify-between pb-4 font-medium border-b border-gray-300 font-inter my-14 text-warmGray-500 dark:text-gray-100 ">
      <span className="text-lg sm:text-xl">Desafios completos</span>
      <span className="text-lg sm:text-xl">{challengeCompleted}</span>
    </div>
  )
}