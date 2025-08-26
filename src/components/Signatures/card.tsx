import { ShoppingCart } from 'lucide-react';
interface  BlendProps{
    image: string,
    title: string,
    price: string
}


function Card({image, title, price }:BlendProps){

    return(
        <div className='flex hover:scale-105 transition flex-row align-center justify-center'>
            <div className=' border-[#B0B0B0] p-6 rounded-2xl border-2'>
            <img className="w-56" src={image} />
            <div className='flex flex-row justify-between'>
                <div>
                <h1 className='font-[lexend] mt-3 text-xl font-semibold text-[#3A3A3A]'>{title}</h1>
                </div>
                <div>
                <h1 className='font-[lexend] mt-3 text-xl text-[#898989] font-light'>{price}</h1>
                </div>
            </div>
            <div className='p-3 gap-3 border-[#3E2723] transition justify-center align-center items-center flex flex-row mt-6 rounded-3xl border'>
                <ShoppingCart size={20} />
                <h1 className='text-center'>Add Chart</h1>
            </div>
            </div>
        </div>
    )

}

export default Card;