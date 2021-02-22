export function ExperienceBar() {
  return (
    <header className="flex items-center">
      <span>0 xp</span>
      <div className="relative flex-1 h-1 mx-6 bg-gray-200 rounded">
        <div className="w-6/12 h-1 bg-lime-500">
          <span className="absolute transform -translate-x-1/2 top-3 left-1/2">300 xp</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  )
}