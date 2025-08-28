import Navbar from './navbar';
import Hero from '../Hero/hero'
import About from '../About/about';
import Signature from '../Signatures/signatures';
import Social from '../Social/social'
import Comment from '../Comment/comment'
import Contact from '../Contact/contact'
function Home() {
  return(
    <div className="flex flex-col bg-[#ffffff]">
    <Navbar />
      <Hero />
      <About />
      <Signature/>
      <Social />
      <Comment />
      <Contact/>
    </div>

  
  )
}

export default Home
