import Image1 from '../../assets/images/img-1.png'
import Image2 from '../../assets/images/img-2.png'
import Image3 from '../../assets/images/img-3.png'
import Image4 from '../../assets/images/img-4.png'

function Social(){
    return(
        <section className="flex justify-center">
            <div className="flex flex-col">
                <h1 className="font-[lexend] text-center text-[#3E2723] font-bold text-3xl">Follow us on Instagram</h1>
                <h1 className="font-[lexend] mt-4 text-center font-light text-xl text-[#626262]">Stay connected with us for the latest updates, promotions, and a behind-<br/>the-scenes look at our coffee creations.</h1>
                <div className='flex flex-col md:flex-row w-full mt-12'>
                    <img className='w-200' src={Image1}/>
                    <img className='w-200' src={Image2}/>
                    <img className='w-200' src={Image3}/>
                    <img className='w-200' src={Image4}/>
                </div>
                <div className='p-12 flex justify-center'>    
                    <button className='hover: cursor-pointer hover:scale-105 bg-[#3E2723] rounded-full font-[lexend] transition text-white h-18 w-40'> Follow Us</button>
                </div>
            </div>

        </section>
    )

}

export default Social;