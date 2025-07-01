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
