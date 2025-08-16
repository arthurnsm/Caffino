import Logo from '../assets/images/logo.png';
import { AlignJustify } from 'lucide-react';
import { useState } from 'react';
function Navbar() {

  const [open, setOpen ] = useState(false);
  
    return (

<nav className="bg-[#E5CFB5] py-5 px-5 md:px-20 justify-between flex items-center">
  <img className="md:h-16 h-10" src={Logo} alt="Logo" />
  <div className="hidden md:flex items-center md:gap-8 gap-4">
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-normal font-[inter]" href="#">Menu</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-normal font-[inter]" href="#">About</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-normal font-[inter]" href="#">Signatures</a>
    <a className="text-[#4A3C31] hover:text-[#2F2A25] font-normal font-[inter]" href="#">Blends</a>
    <a className="bg-[#3E2723] text-white font-semibold font-[inter] flex items-center h-12 px-5 rounded-full" href="#">Contact Us</a>
  </div>
  <button className='md:hidden'
    onClick={()=> setOpen(!open)}>
    {open ? <AlignJustify size={30}/> : <AlignJustify size={28}/>}
  </button>
  {open&& (
    <div className='absolute top-16 left-0 w-full bg-[#E5CFB5] p-5'>
      <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold block" href="#">Menu</a>
      <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold block" href="#">About</a>
      <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold block" href="#">Signatures</a>
      <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold block" href="#">Blends</a>
      <a className="text-[#4A3C31] hover:text-[#2F2A25] font-semibold block" href="#">Contact</a>
    </div>
  )}
</nav>
    )
}

export default Navbar
