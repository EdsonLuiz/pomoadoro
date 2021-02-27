import {useTheme} from 'next-themes'

export function ModeSwitch() {
  const {theme, setTheme} = useTheme()

  // <button
  // aria-label="Toggle Dark Mode"
  // type="button"
  // className="absolute order-2 w-16 h-16 rounded-full dark:bg-gray-100 bg-trueGray-800 sm:w-20 sm:h-20 md:order-3 -inset-8 sm:-inset-10"
  // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
  return (
    <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="grid order-2 w-12 h-12 rounded-full md:hidden -inset-0 dark:bg-gray-100 bg-warmGray-700 md:order-3 place-content-center"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      
      <svg
            className="text-gray-100 transition-colors duration-300 stroke-current dark:text-warmGray-500 hover:text-indigo-400 dark:hover:text-indigo-400"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 17.0533C27.7903 19.3229 26.9385 21.4859 25.5443 23.2891C24.1502 25.0922 22.2713 26.4611 20.1276 27.2354C17.9839 28.0097 15.664 28.1575 13.4393 27.6615C11.2147 27.1654 9.17732 26.0461 7.56562 24.4344C5.95393 22.8227 4.83458 20.7853 4.33853 18.5607C3.84249 16.336 3.99028 14.0161 4.7646 11.8724C5.53893 9.72868 6.90777 7.84982 8.71094 6.45567C10.5141 5.06152 12.6771 4.20974 14.9467 4C13.6179 5.79769 12.9785 8.0126 13.1447 10.2419C13.3109 12.4712 14.2718 14.5667 15.8525 16.1475C17.4332 17.7282 19.5288 18.689 21.7581 18.8553C23.9874 19.0215 26.2023 18.3821 28 17.0533V17.0533Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

    </button>
  )
}