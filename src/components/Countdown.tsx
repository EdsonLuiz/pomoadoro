export function Countdown() {
  return(
    <div className="flex items-center font-semibold font-rajdhani text-blueGray-700">

      <Display>
        <Text>2</Text>
        <Text>5</Text>
      </Display>
      
      <span className="mx-1 text-8xl">:</span>
      
      <Display>
        <Text>0</Text>
        <Text>0</Text>
      </Display>
      
    </div>
  )
}

const Display = ({children}) => (
  <div className="flex items-center flex-1 text-center bg-white rounded-md shadow-xl justify-evenly text-9xl">{children}</div>
)

const Text = ({children}) => (
  <span className="flex-1 first:border-r-8 first:border-gray-100">
    {children}
  </span>
)