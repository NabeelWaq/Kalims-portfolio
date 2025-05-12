const Intro = ({heading,paragraph}) => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-start px-4 md:px-8 md:pl-44 justify-center gap-6 bg-purple-900 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-white">{heading}</h1>
        <p className="text-[.9rem] md:w-[70%] md:text-lg text-white">{paragraph}</p>
    </div>

  )
}
export default Intro