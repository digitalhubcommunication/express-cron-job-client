import { ReactNode } from "react"

type Props  ={
    children:ReactNode;
    className?:string;
} 
export default function Card({className="", children}:Props) {
  return (
    <div className={`p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg ${className}`}>
        {children}
    </div>
  )
}




type CardProps = {
  children: ReactNode;
  label: string;
  value: string|number;
  valueStyle?: string;
};

export const DashboardInfoCard = ({ children, label, value, valueStyle = "" }: CardProps) => {
  return (
    <div className="w-full border  border-slate-300 shadow flex justify-start items-center gap-5 rounded-[10px] p-2 md:p-3">
      {children}
      <div className="grow flex flex-col justify-center">
        <h6 className=" ecj_fs-md font-semibold mb-0.5">{label}</h6>
        <p className={`ecj_fs-md text-black dark:text-white ${valueStyle}`}>
          {value}
        </p>
      </div>
    </div>
  );
};