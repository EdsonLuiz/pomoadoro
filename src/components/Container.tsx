export function Container({children}) {
  return (
    // <div className="container flex flex-col h-screen px-8 py-10 mx-auto">
    //   {children}
    // </div>
    <div className="container grid h-screen grid-cols-1 p-4 mx-auto sm:px-8 sm:py-10 ">
      {children}
    </div>
  )
}