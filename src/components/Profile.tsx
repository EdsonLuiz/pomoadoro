import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import { ModeSwitch } from "./ModeSwitch";




export function Profile() {
  
  const {level} = useContext(ChallengeContext)

  return (
    <div className="grid items-center grid-rows-1 gap-4 mt-12 grid-cols-profile sm:mt-0">
      <img
        className="w-20 h-20 rounded-full"
        src="https://github.com/edsonluiz.png"
        alt="imagem que representa o usuário logado"
      />
      <div className="ml-6">
        <strong className="text-xl font-semibold sm:text-2xl font-inter dark:text-white text-blueGray-700">
          Edson Luiz 
        </strong>
        <p className="flex mt-2 text-base font-normal font-inter dark:text-gray-100 text-warmGray-500">
          <img
            className="mr-2"
            src="icons/level.svg"
            alt="icone que precede informação de nível"
          />
          Level {level}
        </p>
      </div>
      {/* <div className="w-12 h-12 bg-red-500 "></div> */}
      
        <ModeSwitch />
    </div>
  );
}