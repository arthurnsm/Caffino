import Logo from '../assets/images/logo.svg';

function Navbar() {
    return (
<nav className="bg-[#E5CFB5] py-5 px-30 justify-between flex items-center">
  <img className="h-16" src={Logo} alt="Logo" />
  <div className="flex items-center gap-15">
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold" href="#">Home</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold" href="#">About</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold" href="#">Signatures</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold" href="#">Blends</a>
    <a className="bg-[#3E2723] text-white flex items-center h-10 px-4 rounded-full" href="#">Contact</a>
  </div>
</nav>
    )
}

export default Navbar
