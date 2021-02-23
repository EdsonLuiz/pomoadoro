import {useTheme} from 'next-themes'

export function ModeSwitch() {
  const {theme, setTheme} = useTheme()

  return (
    <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="absolute order-2 w-16 h-16 rounded-full dark:bg-gray-100 bg-trueGray-800 sm:w-20 sm:h-20 md:order-3 -inset-8 sm:-inset-10"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      
    </button>
  )
}