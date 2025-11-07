// import { RootState } from "@/redux/store";
// import { useSelector } from "react-redux";
// // import { CronResponseCheckingBtn, CronStatusTogglerBtn } from "./Buttons";

// export default function CronStatus() {
//   const { authUser } = useSelector((state: RootState) => state.auth);
//   if (!authUser || !authUser?.defaultDomains) return <></>;
//   return (
//     <>
//       <section className="section">
//         <div className="w-full mb-5">
//           <h6>Default Crons</h6>
//         </div>
//         <div className="p-0.5 w-full max-w-full overflow-x-auto">
//           <table className="table-shadow rounded-[10px] overflow-hidden text-[16px] md:text-[15px] 2xl:text-[16px] min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tl-lg"
//                 >
//                   #
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Domain
//                 </th>
//                 <th
//                   scope="col"
//                   className="xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Type
//                 </th>
//                 <th
//                   scope="col"
//                   className="xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Status
//                 </th>

//                 <th
//                   scope="col"
//                   className="xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Action
//                 </th>
//                 <th
//                   scope="col"
//                   className="xl:w-[220px] px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider rounded-tr-lg"
//                 >
//                   Response
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {
//                 authUser?.defaultDomains.length === 
//               }
//               {defaultDomains.length === 0 ? (
//                 <tr>
//                   <td
//                     colSpan={7}
//                     className="px-4 py-4 whitespace-nowrap text-gray-500 text-center"
//                   >
//                     No cron jobs found for this user.
//                   </td>
//                 </tr>
//               ) : (
//                 defaultDomains.map((domain, index) => (
//                   <tr
//                     key={domain._id}
//                     className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                   >
//                     <td className="md:w-20 px-4 py-3.5 whitespace-nowrap font-medium text-gray-900">
//                       {index + 1}
//                     </td>
//                     <td className="overflow-x-auto px-4 py-3.5 whitespace-nowrap text-blue-600 hover:underline">
//                       <a
//                         href={`https://${domain.url}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {domain.url}
//                       </a>
//                     </td>
//                     <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap">
//                       <span
//                         className={`capitalize inline-flex leading-5 font-semibold rounded-full`}
//                       >
//                         {index == 0 ? "Cron Work" : "Price Update"}
//                       </span>
//                     </td>
//                     <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap">
//                       <span
//                         className={`capitalize inline-flex leading-5 font-semibold rounded-full ${
//                           domain.status === "enabled"
//                             ? " text-green-600"
//                             : "text-red-500"
//                         }`}
//                       >
//                         {domain.status}
//                       </span>
//                     </td>
//                     <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap font-medium">
//                       <CronStatusTogglerBtn domain={domain} />
//                     </td>
//                     <td className="xl:w-[220px] px-4 py-3.5 whitespace-nowrap font-medium">
//                       <CronResponseCheckingBtn domain={domain} />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// }

export default function CronStatus() {
  return (
    <div>CronStatus</div>
  )
}
