export function Container({children}) {
  return (
    <div className="grid w-11/12 h-screen grid-cols-1 p-4 py-8 mx-auto lg:w-4/5 sm:px-8 sm:py-10 md:pb-20 ">
      {children}
    </div>
  )
}