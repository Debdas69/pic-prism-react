import { IoIosSearch } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="sm:w-[60vw] h-[20vh] overflow-clip sm:rounded-3xl mx-auto flex justify-center items-center mt-20">

      <form className="absolute flex justify-center items-center">
        <input type="text"
        id="search"
        name="search"
        className="py-4 px-3 w-[80vw] sm:w-[40vw] text-xl sm:text-3xl mx-auto outline-none border-b-2 "
        placeholder="Search your asset..."
        />
        <IoIosSearch className="text-3xl sm:text-5xl text-gray-400 -ml-12"/>
      </form>
    </div>
  )
}

export default HeroSection