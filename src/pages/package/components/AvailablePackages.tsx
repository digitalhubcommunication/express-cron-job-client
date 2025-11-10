import { cronPackages } from "@/data/DemoData";
import PackageCard from "./PackageCard";
import { useGetPackagesQuery } from "@/redux/features/packages/packageApiSlice";
import PageLoading from "@/components/loading/PageLoading";
import { TPackage } from "@/types/types";

export default function AvailablePackages() {
  const {data, isFetching} = useGetPackagesQuery({})
  console.log(data,' data package')
  console.log(isFetching,' data fetching')
  if(isFetching) return <PageLoading />
  if(!data?.data?.length) return <p className="text-center">No package found</p>;
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-7 lg:mt-10 gap-10">
      {(data?.data as TPackage[])
        .filter((p) => p.status !== "unavailable")
        .map((item, index) => (
          <PackageCard index={index} key={item._id} cronPackage={item} />
        ))}
    </div>
  );
}
