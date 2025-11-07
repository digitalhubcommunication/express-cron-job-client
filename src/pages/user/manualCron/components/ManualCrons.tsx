import { TManualDomain } from "@/types/types";
import AddNewCron from "./ManualCronActions";
import { useState } from "react";
import ManualDomainCard from "./ManualDomainCard";
import NoDomainMsg from "./NoDomainMsg";

type Props = {
  domains: TManualDomain[];
  addedDomain:number;
};

export default function ManualCrons({domains,addedDomain}:Props) {
   const [manualDomains, setManualDomains] = useState<TManualDomain[]>(domains);
  return (
    <>
              <AddNewCron addedDomain={addedDomain} setManualDomains={setManualDomains} />
              {manualDomains && manualDomains?.length ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
                  {manualDomains?.map((domain) => (
                   <ManualDomainCard key={domain._id}  {...domain} />
                  ))}
                </div>
              ) : (
                <NoDomainMsg />
              )}
            </>
  )
}