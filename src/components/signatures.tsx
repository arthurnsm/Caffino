import Card from './card'
import Americano from '../assets/images/americano.png'
import CoffeMilk from '../assets/images/coffe-milk.png'
import Cappucino from '../assets/images/cappucino.png'
import Espresso from '../assets/images/espresso.png'

function Signature(){
    return(
        <section className="md:p-20 mt-12 md:mt-10 flex flex-col align-center justify-center bg-[#ffffff]">
            <h1 className=" text-center text-4xl font-bold text-[#3E2723] font-[lexend]">Explore Our Signature Blends</h1>
            <h1 className="text-center p-6 md:p-4 font-[lexend] font-light text-[#626262]">Crafted with care, our coffee selections offer rich flavors and aromas to delight every<br/> coffee enthusiast. Experience the perfect brew in every sip</h1>
            <div className='mt-10 flex flex-col md:flex-row justify-center gap-12'>
                <Card title="Americano" image={Americano} price="$3.50"/>
                <Card title="Cappucino" image={Cappucino} price="$4.50"/>
                <Card title="Espresso" image={Espresso} price="$2.50"/>
                <Card title="Coffe Milk" image={CoffeMilk} price="$3.50"/>
            </div>
        </section>
    )

}
export default Signature;