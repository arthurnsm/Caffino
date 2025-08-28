import LogoWhite from '../../assets/images/logo-reverse.png'

function Contact (){ 
    return(
        <section className='bg-[#3E2723]'>
            <div className='flex flex-col-reverse md:flex-row md:p-30 gap-10 p-4 justify-between'>
                <div className='flex flex-col md:items-start justify-center items-center'>
                <img src={LogoWhite}/>
                    <div className='flex flex-col'>
                        <span className='mt-4 font-light text-white font-[lexend]'>Copyright © 2024 Caffino Caffe</span>
                        <span className='font-light text-white font-[lexend]'>All Rights Reserved</span>
                    </div>
                </div>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col gap-5'>
                        <h1 className=" text-white font-[lexend] text-2xl md:text-start md:text-3xl">Subscribe to our newsletter</h1>
                        <div className='flex md:flex-row flex-col md:items-end items-start justify-end align-end gap-6'>
                            <input className='mt-3 bg-white w-80 md:w-115 h-16 decoration-0 border-0 outline-none rounded-full p-4 md:placeholder-gray-400' type='email' placeholder='Enter your Email'/>
                            <button className='hover:cursor-pointer hover:scale-104 transition w-30 h-16 rounded-full text-center text-white font-[lexend] border-white  outline-1'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Contact;