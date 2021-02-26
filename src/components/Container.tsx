export function Container({children}) {
  return (
    <div className="grid w-11/12 h-screen grid-cols-1 p-4 mx-auto lg:w-4/5 sm:px-8 sm:py-10 ">
      {children}
    </div>
  )
}