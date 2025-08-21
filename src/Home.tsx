import Navbar from './components/navbar';
import Hero from './components/hero'
import About from './components/about';
function Home() {
  return(
    <div className="flex flex-col gap-4 bg-[#E5CFB5]">
    <Navbar />
      <Hero />
      <About />
    </div>

  
  )
}

export default Home
