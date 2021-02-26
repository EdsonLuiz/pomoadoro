export function Container({children}) {
  return (
    <div className="container grid h-screen grid-cols-1 p-4 mx-auto sm:px-8 sm:py-10 ">
      {children}
    </div>
  )
}