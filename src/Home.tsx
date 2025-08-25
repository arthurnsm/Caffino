import Navbar from './components/navbar';
import Hero from './components/hero'
import About from './components/about';
import Signature from './components/signatures';
function Home() {
  return(
    <div className="flex flex-col bg-[#ffffff]">
    <Navbar />
      <Hero />
      <About />
      <Signature/>
    </div>

  
  )
}

export default Home
