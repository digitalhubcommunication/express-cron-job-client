// "use client";
// import webtrickerDark from "@/assets/images/home/webtricker-logo.svg";
// import webtrickerWhite from "@/assets/images/home/webtricker-white.svg";
// import { useSelector } from "react-redux";
// import LoadingSpinner from "../loading/LoadingSpinner";

// export default function SiteLogoLong() {
//   const { isLoading, isError, darkLargeLogo,lightLargeLogo } = useSelector(
//     (state: RootState) => state.siteLogo
//   );

//   if (isLoading)
//     return (
//       <div className="inline w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto">
//         <LoadingSpinner className="w-6 h-6" />
//       </div>
//     );
//   return (
//     <>
//       <Image
//         className="inline dark:hidden w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
//         src={isError ? webtrickerDark : darkLargeLogo}
//         width={282}
//         height={74}
//         alt="Site logo"
//       />
//       <Image
//         className="hidden dark:inline w-[160px] md:w-[180px] lg:w-[190px] xl:w-[200px] h-auto"
//          src={isError ? webtrickerWhite : lightLargeLogo}
//         width={282}
//         height={74}
//         alt="Site logo"
//       />
//     </>
//   );
// }


export default function SiteLogoLong() {
  return (
    <div>SiteLogoLong</div>
  )
}
