export function Container({children}) {
  return (
    <div className="container flex flex-col h-screen px-8 py-10 mx-auto">
      {children}
    </div>
  )
}