import PackageCard from "./PackageCard";
import { useGetPackagesQuery } from "@/redux/features/packages/packageApiSlice";
import PageLoading from "@/components/loading/PageLoading";
import { TPackage } from "@/types/types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function AvailablePackages() {
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );
  const { data, isFetching } = useGetPackagesQuery({});
  console.log(data,' data');
  console.log(isFetching,' isFetching');
  if (isFetching || isUserLoading) return <PageLoading />;
  if (!data?.packages?.length)
    return <p className="text-center mt-10">No package found</p>;

  let allPackages: TPackage[] = data.packages || [];

  // filter the subscribed package
  if (authUser?.subscription) {
    allPackages = (data?.packages || []).filter((p: TPackage) => p.price > 0);
  }

  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] mt-7 lg:mt-10 gap-10">
      {allPackages.map((item, index) => (
        <PackageCard index={index} key={item._id} cronPackage={item} />
      ))}
    </div>
  );
}
