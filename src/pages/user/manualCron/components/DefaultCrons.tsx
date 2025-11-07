import { TDomain } from "@/types/types";
import { useState } from "react";
import DefaultDomainCard from "./DefaultDomainCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NoDomainMsg from "./NoDomainMsg";

type Props = {
  domains: TDomain[];
};
export default function DefaultCrons({ domains }: Props) {
  const { authUser } = useSelector((state: RootState) => state.auth);
  const [defaultDomains, setDefaultDomains] = useState<TDomain[]>(domains);

  return (
    <>
      {defaultDomains && defaultDomains?.length ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
          {defaultDomains?.map((domain) => (
            <DefaultDomainCard
              key={domain._id}
              domain={domain}
              intervalInMs={authUser?.subscription?.intervalInMs || 0}
            />
          ))}
        </div>
      ) : (
        <NoDomainMsg />
      )}
    </>
  );
}
