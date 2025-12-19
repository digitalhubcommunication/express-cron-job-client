// import { updateDefaultDomain } from "@/redux/features/auth/AuthSlice";
// import { RootState } from "@/redux/store";
// import { TDomain } from "@/types/types";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

// export const CronStatusTogglerBtn = ({ domain }: { domain: TDomain }) => {
//   const dispatch = useDispatch();
//   const { authUser } = useSelector((state: RootState) => state.auth);
//   // Handler
//   const handleToggleStatus = (id: string) => {
//     // setCronJobs(prevJobs =>
//     //   prevJobs.map(job =>
//     //     domain.id === id
//     //       ? { ...job, status: domain.status === 'enabled' ? 'disabled' : 'enabled' }
//     //       : job
//     //   )
//     // );
//     // In a real application, you would send an API request here to update the status on the server.

//     const updatedDefaultDomains: TDomain[] = defaultDomains.map((domain) =>
//       domain._id === id
//         ? {
//             ...domain,
//             status: domain.status === "enabled" ? "disabled" : "enabled",
//           }
//         : domain
//     );
//     toast.warn("API integration in progress")
//     dispatch(updateDefaultDomain(updatedDefaultDomains));
//     console.log(`Toggling status for cron job ID: ${id}`);
//   };

//   return (
//     <button
//       onClick={() => handleToggleStatus(domain._id)}
//       className={`px-3 py-1 rounded-md text-white font-semibold transition-colors duration-200 ${
//         domain.status === "enabled"
//           ? "bg-red-500 hover:bg-red-600"
//           : "bg-green-500 hover:bg-green-600"
//       }`}
//     >
//       {domain.status === "enabled" ? "Disable" : "Enable"}
//     </button>
//   );
// };

// export const CronResponseCheckingBtn = ({ domain }: { domain: TDomain }) => {
//   const [cooldown, setCooldown] = useState(0); // countdown in seconds

//   // Start the cooldown
//   const handleCheckResponse = (id: string) => {
//     console.log(id);
//     toast.warn("API integration in progress");
//     setCooldown(60);
//   };

//   // Countdown logic
//   useEffect(() => {
//     if (cooldown <= 0) return;

//     const timer = setInterval(() => {
//       setCooldown((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     // Cleanup interval on unmount
//     return () => clearInterval(timer);
//   }, [cooldown]);

//   return (
//     <button
//       onClick={() => handleCheckResponse(domain._id)}
//       disabled={cooldown > 0}
//       className={`px-3 py-1 ${
//         cooldown > 0
//           ? "bg-gray-400 cursor-not-allowed"
//           : "bg-blue-500 hover:bg-blue-600"
//       } text-white font-semibold rounded-md transition-colors duration-200`}
//     >
//       {cooldown > 0 ? `Wait ${cooldown}s` : "Check Cron"}
//     </button>
//   );
// };

export default function Buttons() {
  return (
    <div>Buttons</div>
  )
}
