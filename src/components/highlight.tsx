import type { ReactNode } from "react";
interface HighlightProps{
        icon?: ReactNode;
        title: string;
        subtitle: string;

}

function Highlight({icon, title, subtitle}: HighlightProps){
    return(
        <div className='flex flex-col gap-4  '>
            
                <div className="flex mt-16 flex-row  items-center">
                    {icon}
                    <h1 className="ml-2 text-[#4A3C31] font-bold text-xl">{title}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-[lexend] text-[#626262] md:w-90 font-light">{subtitle}</h1>
                </div>
        </div>
    )
}

export default Highlight;