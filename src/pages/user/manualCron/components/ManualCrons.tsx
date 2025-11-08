import AddNewCron from "./ManualCronActions";
import ManualDomainCard from "./ManualDomainCard";
import NoDomainMsg from "./NoDomainMsg";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export default function ManualCrons() {
  const { authUser } = useSelector((state: RootState) => state.auth);

  if(!authUser?.manualDomains) return <></>;

  const limit = authUser?.subscription?.manualCronLimit || 3;
  const remainingLimit = limit - authUser?.manualCronCount;

  return <>
            {remainingLimit ? <AddNewCron />: <p className="text-red-500">You have reached manual cron adding limit </p>}
              {authUser?.manualDomains?.length && authUser?.manualDomains ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5">
                  {authUser?.manualDomains?.map((domain) => (
                   <ManualDomainCard key={domain._id}  {...domain} />
                  ))}
                </div>
              ) : (
                <NoDomainMsg />
              )}
            </>
}