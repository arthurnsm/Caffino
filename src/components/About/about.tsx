import Video from '../../assets/images/Video.png'
import Highlight from './highlight';
import { Coffee } from 'lucide-react';
function About(){
    return(
        <section className="flex align-center items-center justify-center md:pb-30 bg-[#ffffff]">
            <div className="flex flex-col md:flex-row md:mt-30 mt-20 gap-10 md:gap-20">
            <div className="">
                    <h1 className='md:hidden mb-4 text-[#4A3C31] font-semibold font-[lexend] text-3xl text-center '>Why we're the Best Choice</h1>
                    <img src={Video} alt="Coffee Shop"  className="md:w-full w-xl p-2  object-cover rounded-lg " />
                </div>
                <div className='flex m-2 md:m-2 flex-col align-center md:gap-2 gap-8 justify-center'>
                    <h1 className='md:mt-5 md:flex hidden  text-[#4A3C31] font-semibold font-[lexend] text-3xl text-center '>Why we're the Best Choice</h1>
                    <Highlight icon={<Coffee/>} title='Highlight One' subtitle='By offering a cozy ambiance, our coffee shop becomes
                    the perfect spot for relaxation and connection.'/>
                    <Highlight icon={<Coffee/>} title='Highlight Two' subtitle='By serving expertly crafted beverages, we ensure every cup delivers a delightful experience.'/>
                </div>

            </div>
        </section>
    )
}  

export default About;