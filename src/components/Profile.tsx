



export function Profile() {
  
  return (
    <div className="flex items-center mt-12 sm:mt-0">
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
          Level 01
        </p>
      </div>
    </div>
  );
}