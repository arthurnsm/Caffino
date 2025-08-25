import type { ReactNode } from "react";

    interface CardProps {
        icon?: ReactNode;
        title: string;
        subtitle: string;
    }
function InfoCards ({icon, title, subtitle, }: CardProps) {


    return (
        <div className="md:pr-10 absolute flex items-center gap-1 md:gap-5 bg-white rounded-xl md:rounded-3xl shadow-md p-1 md:p-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="md:text-lg text-[10px] font-bold">{title}</h3>
        <p className="md:text-sm text-[8px] text-gray-500">{subtitle}</p>
      </div>
    </div>

    );



}
export default InfoCards;


