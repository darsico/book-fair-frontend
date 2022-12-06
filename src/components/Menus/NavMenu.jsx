import NavBar from "./NavBar"

const NavMenu = ({ isOpen, setIsOpen }) => {

  return (
    <>
      <div className={`flex gap-2 items-center md:flex-row flex-col fixed top-0 left-0 md:relative w-screen h-screen justify-start md:justify-center pt-32 md:pt-0 bg-white z-30 md:bg-transparent md:w-fit md:h-fit text-2xl md:text-base ${isOpen ? "fixed" : "hidden"} md:hidden`}>
        <NavBar mobile setIsOpen={setIsOpen} />
      </div >
      <div className="hidden md:flex">
        <NavBar />
      </div>
    </>
  )
}

export default NavMenu
