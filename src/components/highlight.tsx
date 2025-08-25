import type { ReactNode } from "react";
interface HighlightProps{
        icon?: ReactNode;
        title: string;
        subtitle: string;

}

function Highlight({icon, title, subtitle}: HighlightProps){
    return(
        <div className='flex flex-col md:gap-5  '>
            
                <div className="flex md:mt-16  flex-row  items-center">
                    {icon}
                    <h1 className=" text-[#4A3C31] ml-2 text-center md:text-start font-bold text-xl">{title}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-[lexend]  text-[#626262] md:text-start md:w-90 font-light">{subtitle}</h1>
                </div>
        </div>
    )
}

export default Highlight;