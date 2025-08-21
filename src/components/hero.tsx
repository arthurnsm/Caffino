import Coffe from '../assets/images/coffe.png'
import InfoCards from './infocards';
import { MoveLeft, Coffee, Heart } from 'lucide-react';

function Hero() {
    return (
        <div className="relative bg-[#E5CFB5] flex flex-col md:flex-row justify-around md:gap-8 gap-10 overflow-hidden">

            <div className="flex flex-col md:p-0 pt-4 justify-center">

                <h1 className="text-[#4A3C31] font-semibold md:text-6xl text-5xl text-center font-[lexend] md:text-left">
                    A cozy place to enjoy <br /> your coffee
                </h1>

                <h1 className='mt-4 font-[inter] font-light md:text-left text-center'>
                    Freshly brewed coffee and delicious treats, crafted with passion to <br /> brighten your day. Relax, sip, and savor the moments with us.
                </h1>

                <div className="md:hidden flex justify-center mt-6">
                    <img className="w-60 md:w-52" src={Coffe} alt="Coffe" />
                </div>

                <div className='justify-center md:justify-start flex flex-row gap-6 mt-4'>
                    <button className="flex bg-[#4A3C31] text-white py-4 px-4 rounded-full transition hover:scale-110 hover:cursor-pointer">
                        View Menu
                        <MoveLeft size={28} className='ml-2 -scale-x-100' />
                    </button>
                    <button className="flex hover:bg-[#4A3C31] hover:text-white hover:cursor-pointer transition bg-transparent border-2 border-[#4A3C31] text-[#4A3C31] py-4 px-6 hover:scale-110 rounded-full">
                        Visit Us
                    </button>
                </div>
                <div className="absolute w-96 left-44 md:hidden  gap-4 mt-20 items-center ">
                    <InfoCards icon={<Heart size={20} />} title="Trusted by 10,000++" subtitle="Coffe Lovers!" />
                </div>
                <div className="absolute w-96 left-8 bottom-40 md:hidden  gap-4 mt-6 items-center ">
                    <InfoCards icon={<Coffee size={20} className="text-[#4A3C31]" />} title="50+ Menu" subtitle="Choices available" />
                </div>

            </div>

            <div className="hidden md:flex relative justify-center overflow-hidden">
                <img className="w-2xl" src={Coffe} alt="Coffe" />

                <div className='absolute top-[24rem] left-0 w-96'>
                    <InfoCards icon={<Coffee size={40} className="text-[#4A3C31]" />} title="50+ Menu" subtitle="Choices available" />
                </div>

                <div className='absolute top-10 left-[18rem] w-96'>
                    <InfoCards icon={<Heart size={40} />} title="Trusted by 10,000++" subtitle="Coffe Lovers!" />
                </div>
            </div>

        </div>
    )
}

export default Hero;
