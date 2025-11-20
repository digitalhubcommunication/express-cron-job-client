import InvalidUser from "@/components/shared/InvalidUser";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import AddNewCron from "./AddNewCron";
import AdminManualCronCard from "./AdminManualCronCard";
import NoDomainMsg from "@/pages/user/manualCron/components/NoDomainMsg";

export default function AddedDomains() {
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isUserLoading)
    return (
      <LoadingSpinner
        totalVisuals={3}
        containerClass="w-6 md:w-8 h-6 2xl:h-8"
        squareClasses={["bg-white", "bg-white", "bg-white"]}
      />
    );

  if (!authUser) return <InvalidUser message="Invalid User" />;

  return (
    <DashboardContainer>
      <section className="section-pb mt-5 xl:mt-10">
        <div className="w-full mb-5 md:mb-10 lg:mb-14">
          <h3 className="text-center">
            Welcome <span className="font-semibold">{authUser.name}</span>
          </h3>
        </div>
        {/* <h5 className="font-semibold mb-4">Default Domain</h5>
        <div className="w-full">
          <p>{authUser.domain}</p>
        </div> */}

        <h5 className="font-semibold mb-4 mt-10 md:mt-20">Manual Domains</h5>
        <div className="w-full">
                      <AddNewCron />
                        {authUser?.manualDomains?.length && authUser?.manualDomains ? (
                          <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-5 mt-5">
                            {/* {authUser?.manualDomains?.map((domain) => (
                             <AdminManualCronCard key={domain?._id}  {...domain} />
                            ))} */}

                            <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 mt-5"><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Fusion_1</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion1_updateprice&amp;Other_Fusion_1=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Script_101</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion101_updateprice&amp;Other_Script_101=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Chimera_Tool</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=chimeratool_updateprice&amp;Chimera_Tool=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Fusion_2</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion2_updateprice&amp;Other_Fusion_2=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Fusion_10</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion10_updateprice&amp;Other_Fusion_10_=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Fusion_11</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion11_updateprice&amp;Other_Fusion_11=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Script_102</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion102_updateprice&amp;Other_Script_102=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Script_103</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion103_updateprice&amp;Other_Script_103=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div><div className="p-4 md:p-5 rounded-[8px] lg:rounded-[10px] border border-slate-300 shadow-lg flex flex-col gap-2 relative max-w-[500px]"><p className="flex items-center gap-2"><span className="font-semibold">Title: </span><span>Other_Script_104</span></p><p className="flex items-center gap-2"><span className="font-semibold">URL: </span><span className="text-wrap">https://kingunlocker.com/includes/cron.php?action=fusion104_updateprice&amp;Other_Script_104=true</span></p><p className="flex items-center gap-2"><span className="font-semibold">Execution Time: </span><span>30 Minutes</span></p><div className="flex items-center justify-between gap-5"><div className="flex items-center gap-2"><span className="font-semibold">Status: </span><button className="
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                h-6 w-12 
                bg-green-500
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            " aria-checked="true" role="switch"><span title="Active" className="
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    w-5 h-5 
                    translate-x-6
                " aria-hidden="true"></span></button></div><button><svg className="w-5 h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" fill="currentcolor"></path></svg></button></div></div></div>
                          </div>
                        ) : (
                          <NoDomainMsg />
                        )}
        </div>
      </section>
      {/* <CronStatus /> */}
    </DashboardContainer>
  );
}
