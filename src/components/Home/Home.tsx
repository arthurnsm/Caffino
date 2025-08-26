import Navbar from './navbar';
import Hero from '../Hero/hero'
import About from '../About/about';
import Signature from '../Signatures/signatures';
import Social from '../Social/social'
function Home() {
  return(
    <div className="flex flex-col bg-[#ffffff]">
    <Navbar />
      <Hero />
      <About />
      <Signature/>
      <Social />
    </div>

  
  )
}

export default Home
