import LoadingSpinner from "./LoadingSpinner";

export default function PageLoading({className=""}:{className?:string}) {
  return (
    <div className={`w-full  h-full min-h-[300px] flex justify-center items-center ${className}`}>
      <div className=""> 
        <LoadingSpinner
        totalVisuals={3}
        containerClass="w-6 md:w-8 h-6 2xl:h-8"
        // squareClasses={["bg-white", "bg-white", "bg-white"]}
      />
      </div>
    </div>
  );
}
