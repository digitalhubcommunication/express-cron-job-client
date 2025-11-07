import { Dispatch, SetStateAction } from "react"
import { TCronType } from "../CronHistory"
type Props ={
    cronType:TCronType,
    setCronType:Dispatch<SetStateAction<TCronType>>
}
export default function CronTypeSwitcher({cronType, setCronType}:Props) {

    const handleChange = (action:TCronType)=>{
        if(cronType== action)return;
        setCronType(action);
    }
  return (
    <div className="w-full py-4 gap-2 md:py-5 flex items-start flex-wrap">
          <button onClick={()=>handleChange("ALL")} className={`btn ${cronType==="ALL" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>All</button>
          <button onClick={()=>handleChange("DEFAULT")} className={`btn ${cronType==="DEFAULT" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>Default</button>
          <button onClick={()=>handleChange("MANUAL")} className={`btn ${cronType==="MANUAL" && "btn-success"} !pl-[14px] flex items-center gap-2 `}>Manual</button>
    </div>
  )
}
