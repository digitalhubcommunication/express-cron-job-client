import DefaultDomainCard from "./DefaultDomainCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NoDomainMsg from "./NoDomainMsg";

export default function DefaultCrons() {
  const { authUser } = useSelector((state: RootState) => state.auth);
  if(!authUser || !authUser?.defaultDomains?.length) return <></>
  return (
    <>
      {authUser.defaultDomains && authUser.defaultDomains?.length ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
          {authUser.defaultDomains?.map((domain) => (
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
