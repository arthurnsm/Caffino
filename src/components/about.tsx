import Video from '../assets/images/Video.png'
import Highlight from './highlight';
import { Coffee } from 'lucide-react';
function About(){
    return(
        <section className="flex items-center justify-center p-8 bg-[#ffffff]">
            <div className="flex flex-row mt-24 gap-20">
            <div className="">
                    <img src={Video} alt="Coffee Shop"  className="w-full  object-cover rounded-lg shadow-md" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='mt-5 text-[#4A3C31] font-semibold font-[lexend] text-3xl '>Why we're the Best Choice</h1>
                    <Highlight icon={<Coffee/>} title='Highlight One' subtitle='By offering a cozy ambiance, our coffee shop becomes
                    the perfect spot for relaxation and connection.'/>
                    <Highlight icon={<Coffee/>} title='Highlight Two' subtitle='By serving expertly crafted beverages, we ensure every cup delivers a delightful experience.'/>
                </div>

            </div>
        </section>
    )
}  

export default About;