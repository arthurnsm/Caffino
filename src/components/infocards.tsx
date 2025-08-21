import type { ReactNode } from "react";

    interface CardProps {
        icon?: ReactNode;
        title: string;
        subtitle: string;
        userWrapper?: boolean;
    }
function InfoCards ({icon, title, subtitle, userWrapper}: CardProps) {

    const content = (
    <div className="relative">
        <div className="md:pr-10 absolute flex items-center gap-2 md:gap-5 bg-white rounded-3xl shadow-md p-3 md:p-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="md:text-lg text-[10px] font-bold">{title}</h3>
        <p className="md:text-sm text-[8px] text-gray-500">{subtitle}</p>
      </div>
    </div>
    </div>

    );

  return userWrapper ? (
    <div><h1></h1>{content}</div>
  ) : (
    content
  );

}
export default InfoCards;


