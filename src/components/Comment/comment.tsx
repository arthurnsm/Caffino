import CoffeBean from '../../assets/images/coffee-bean.png'
import Like from '../../assets/images/like.png'
import Profile from '../../assets/images/profile-placeholder.png'
function Comment (){
    return(
        <section className="bg-[#E5CFB5] items-center flex flex-col md:flex-row align-center justify-center p-10 md:p-25">
            <div className='md:absolute  w-[90%] flex justify-between flex-row'>
                <img className="md:w-60 hidden md:flex md:h-60"src={Like}/>
                <img className="md:w-60 hidden md:flex md:h-60"src={CoffeBean}/>
            </div>
            <div className='md:w-70 w-full md:items-start md:justify-center justify-start h-25 md:h-40 gap-3 flex'>
                <div className='flex justify-center align-center items-center  rounded-full'>
                    <img src={Profile}/>
                </div>
                <div className='flex flex-col justify-center align-center'>
                    <h1 className='font-[lexend] text-[#3A3A3A] text-lg font-bold'>Elisa Maria</h1>
                    <h1 className='font-[lexend] font-light'>UI UX Designer</h1>
                </div>
            </div>

            <div className='flex align-center justify-center items-center'>
                <h1 className="text-start text-xl md:text-2xl text-[#3A3A3A] font-[lexend] font-medium">“Every time I come here, I always feel at home. The<br className='hidden md:block'/> coffee is incredibly delicious, with rich flavor and an<br className='hidden md:block'/> enticing aroma. The atmosphere of the cafe is also very<br className='hidden md:block'/> cozy, perfect for relaxing or working. The friendly service<br className='hidden md:block'/> makes me want to come back every time!”</h1>
            </div>
        </section>
    )
}

export default Comment;