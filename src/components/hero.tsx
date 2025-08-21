import Coffe from '../assets/images/coffe.png'
import InfoCards from './infocards';
import { MoveLeft, Coffee } from 'lucide-react';
function Hero (){
    return(
        <div className="bg-[#E5CFB5] flex flex-col md:flex-row  justify-around ">
            <div className="flex flex-col md:p-0 pt-10 justify-center">
                <h1 className="text-[#4A3C31] font-semibold md:text-6xl text-5xl text-center font-[lexend] md:text-left">A cozy place to enjoy <br /> your coffee</h1>
                <h1 className='mt-4 font-[inter] font-light md:text-left text-center'>Freshly brewed coffee and delicious treats, crafted with passion to <br /> brighten your day. Relax, sip, and savor the moments with us.</h1>
                <div className=' justify-center md:justify-start flex flex-row gap-6'>
                    <button className="flex  bg-[#4A3C31] text-white py-4 px-4 rounded-full mt-4 transition hover:scale-110 hover:cursor-pointer">View Menu
                        <MoveLeft size={20} className='ml-2  -scale-x-100'/>
                    </button>
                    <button className="flex  hover:bg-[#4A3C31] hover:text-white hover:cursor-pointer transition bg-transparent border-2 border-[#4A3C31] text-[#4A3C31] py-4 px-6  hover:scale-110 rounded-full mt-4">Visit Us</button>
                </div>
            </div>
            <div className="relative flex justify-center ">
                <img className="w-64 md:w-2xl" src={Coffe} alt="Coffe" />
            </div>
            <div className="absolute w-full bottom-10 left-5 md:top-135 md:left-240">
                <InfoCards icon={<Coffee size={35} />} title="50+ Menu" userWrapper subtitle="Choices available" />
            </div>
            <div className="absolute w-full bottom-10 left-50  md:top-40 md:left-340">
                <InfoCards icon="" title="Trusted by 10,000++" subtitle="Coffee Lovers!" />
            </div>
        </div>
    )
}


export default Hero