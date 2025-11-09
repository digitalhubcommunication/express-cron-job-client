import { Dispatch, SetStateAction } from "react"
import { TCronType, TFilterBy } from "../CronHistory"
type Props ={
    cronType:TCronType,
    setCronType:Dispatch<SetStateAction<TCronType>>;
    setFilterBy:Dispatch<SetStateAction<TFilterBy>>;
}
export default function CronTypeSwitcher({cronType,setFilterBy, setCronType}:Props) {

    const handleChange = (action:TCronType)=>{
        if(cronType === action)return;
        if(action !=="manual"){
          setFilterBy("status");
        }
        setCronType(action);
    }
  return (
    <div className="w-full py-4 gap-2 md:py-5 flex items-start flex-wrap">
          <button onClick={()=>handleChange("")} className={`btn ${cronType==="" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>All</button>
          <button onClick={()=>handleChange("default")} className={`btn ${cronType==="default" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>Default</button>
          <button onClick={()=>handleChange("manual")} className={`btn ${cronType==="manual" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>Manual</button>
    </div>
  )
}
