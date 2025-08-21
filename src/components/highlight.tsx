import type { ReactNode } from "react";
interface HighlightProps{
        icon?: ReactNode;
        title: string;
        subtitle: string;

}

function Highlight({icon, title, subtitle}: HighlightProps){
    return(
        <div className='flex flex-row gap-4 align-center items-center'>
            {icon}
            {title}
            {subtitle}
        </div>
    )
}

export default Highlight;