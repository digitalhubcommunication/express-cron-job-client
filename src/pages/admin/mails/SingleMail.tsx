import PageLoading from "@/components/loading/PageLoading";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import { useGetUserMailDetailsQuery } from "@/redux/features/adminActions/adminActions";
import { useParams } from "react-router";

export default function SingleMail() {
  const { id } = useParams();
  const { data, isFetching } = useGetUserMailDetailsQuery(id);


  if (isFetching) return <PageLoading />

  if (!data?.success)
    return (
      <div className="w-full min-h-[600px] flex items-center justify-center">
        <p>No mail found</p>
      </div>
    );


  return (
    <DashboardContainer>
      <div className="mt-10">
        <h6 className="mb-5 text-center">Mail from {data?.mail.name}</h6>
        <h3 className="capitalize mb-1">{data?.mail?.subject}</h3>
        <p>
          {data?.mail?.name} &lt;{data?.mail?.email}&gt;
        </p>
        <p className="mt-5">{data?.mail?.message}</p>
      </div>
    </DashboardContainer>
  );
}
