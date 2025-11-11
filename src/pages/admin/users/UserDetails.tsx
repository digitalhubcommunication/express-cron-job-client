import { ListIcon } from "@/components/icons/Icons";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import PageLoading from "@/components/loading/PageLoading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import ToggleButton from "@/pages/shared/ToggleButton";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/redux/features/adminActions/adminActions";
import { TDomain, TManualDomain } from "@/types/types";
import { getExpiryText, isDateExpired } from "@/utils/utils";
import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

type TUpdateAction = "STATUS" | "PERMISSION" | "URLS_STATUS" | "DELETE_PACKAGE" | "ASSING_PACKAGE" | null;

export default function UserDetails() {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleUserQuery(id);
  const [update, { isLoading }] = useUpdateUserMutation();
  const [updateAction, setUpdateAction] = useState<TUpdateAction>(null);

  //   handlers
  const handleStatusChange = (
    id: string,
    type: "default" | "manual",
    status: "enabled" | "disabled"
  ) => {};

  const updateUserInfo = async (data: any) => {
    try {
      const res = await update({ id, data }).unwrap();
      if (res.success) {
        toast.success(res?.message);
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    } finally {
      setUpdateAction(null);
    }
  };

  // callback functions
  const status_CB = () => {
    setUpdateAction("STATUS");
    updateUserInfo({
      status: data?.user?.status === "enabled" ? "disabled" : "enabled",
    });
  };

  const ATAMD_CB = () => {
    setUpdateAction("PERMISSION");
    updateUserInfo({
      allowedToAddManualDomains: !data?.user?.allowedToAddManualDomains,
    });
  };

  // conditional return
  if (isFetching) return <PageLoading />;

  if (!data?.user)
    return <ErrorMessage key="NO_USER_FOUND" msg="No user found" />;

  const firstIndexes = data?.user?.defaultDomains?.length || 0;
  const isPackageActive = isDateExpired(data?.user?.packageExpiresAt || "");

  return (
    <DashboardContainer className="py-10">
      <div className="flex gap-10">
        <div className="w-full">
          <p className="">
            <span className="font-semibold">Name :</span>{" "}
            {data?.user?.name || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Username :</span>{" "}
            {data?.user?.username || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Role :</span>{" "}
            {data?.user?.role || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Mobile :</span>{" "}
            {data?.user?.mobile || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Domain :</span>{" "}
            {data?.user?.domain || ""}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold">Status :</span>{" "}
            {updateAction === "STATUS" && !isLoading ? (
              <LoadingSpinner
                className="min-h-[39.81px]"
                containerClass="w-3 md:w-4 h-3 2xl:h-4"
              />
            ) : (
              <ToggleButton
                onToggle={status_CB}
                size="sm"
                label={data?.user?.status}
                isActive={data?.user?.status === "enabled"}
              />
            )}
          </div>
          <p className="mt-1">
            <span className="font-semibold">Subscription :</span>{" "}
            {data?.user?.subscription?.name || ""}
          </p>
        </div>
        <div className="w-full">
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold">Allowed to add manual urls : </span>{" "}
            <ToggleButton
              onToggle={ATAMD_CB}
              size="sm"
              label={data?.user?.allowedToAddManualDomains ? "ONN" : "OFF"}
              isActive={data?.user?.allowedToAddManualDomains}
            />
          </div>
          <p className="mt-1">
            <span className="font-semibold">Telegram ID :</span>{" "}
            {data?.user?.telegramId || "null"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Telegram connected :</span>{" "}
            {data?.user?.telegramConnected ? "Yes" : "No"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Total Manual Cron Added :</span>{" "}
            {data?.user?.manualCronCount || 0}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Total Manual Cron : </span>{" "}
            {data?.user?.manualDomains?.length || 0}
          </p>

          <p className="mt-1">
            <span className="font-semibold">Expiry Date :</span>{" "}
            {data?.user?.packageExpiresAt
              ? getExpiryText(data?.user?.packageExpiresAt).date
              : "Not found"}
          </p>

          {/* ==== */}
          <p className="mt-1">
            <span className="font-semibold">Account created on :</span>{" "}
            {data?.user?.createdAt
              ? getExpiryText(data?.user?.createdAt).date
              : "Not found"}
          </p>

          {isPackageActive ? (
            <button className="py-1 rounded-md mt-1 px-3.5 bg-red-500 hover:bg-red-600 text-white">Remove Package</button>
          ) : (
            <button className="btn btn-success">Assing Package</button>
          )}
        </div>
      </div>

      <h6 className="mb-3 font-semibold mt-10">Domains</h6>
      <div className="overflow-x-auto border-t border-b max-h-[500px] lg:border border-slate-300 rounded-md">
        {/* Desktop Table */}
        <table className="w-full min-w-[750px] lg:min-w-[800px] text-left border-collapse hidden sm:table">
          <thead className="bg-slate-800 text-white sticky top-0 z-10">
            <tr className="text-sm xl:text-base text-white">
              <th className="w-20 px-3 py-2">
                <ListIcon className="w-5" />
              </th>
              <th className="max-w-[200px] px-3 py-2">URL</th>
              <th className="max-w-[300px] px-3 py-2">Title</th>
              <th className="max-w-[300px] px-3 py-2">Type</th>
              <th className="px-3 py-2">Status</th>
              <th className="max-w-[200px] px-3 py-2">Execution Time</th>
              <th className="max-w-[200px] px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.user?.defaultDomains?.length &&
              (data?.user?.defaultDomains as TDomain[])?.map((domain, i) => (
                <tr
                  key={domain._id}
                  className={`cursor-pointer border-t hover:bg-slate-100 border-slate-300 text-sm xl:text-base`}
                >
                  <td className="w-20 px-3 py-2">{i + 1}</td>
                  <td className="max-w-[200px] px-3 py-2">{domain.url}</td>
                  <td className="max-w-[300px] px-3 py-2">No title</td>
                  <td className="px-3 py-2">Default</td>
                  <td className="px-3 py-2">{domain.status}</td>
                  <td className="max-w-[200px] px-3 py-2">
                    {data?.user?.subscription?.intervalInMs
                      ? data?.user?.subscription?.intervalInMs / 1000
                      : 0}
                    s
                  </td>
                  <td className="max-w-[200px] px-3 py-2">
                    <button
                      onClick={() =>
                        handleStatusChange(
                          domain._id,
                          "default",
                          domain.status === "enabled" ? "disabled" : "enabled"
                        )
                      }
                      className=" underline text-blue-600"
                    >
                      {domain.status === "enabled"
                        ? "Disable URL"
                        : "Enable URL"}
                    </button>
                  </td>
                </tr>
              ))}
            {data?.user?.manualDomains?.length &&
              (data?.user?.manualDomains as TManualDomain[])?.map(
                (domain, i) => (
                  <tr
                    key={domain._id}
                    className={`cursor-pointer border-t hover:bg-slate-100 border-slate-300 text-sm xl:text-base`}
                  >
                    <td className="w-20 px-3 py-2">{firstIndexes + i + 1}</td>
                    <td className="max-w-[200px] px-3 py-2">{domain.url}</td>
                    <td className="max-w-[300px] px-3 py-2">{domain.title}</td>
                    <td className="px-3 py-2">Manual</td>
                    <td className="px-3 py-2">{domain.status}</td>
                    <td className="max-w-[200px] px-3 py-2">
                      {domain.executeInMs / 1000 / 60 || ""}M
                    </td>
                    <td className="max-w-[200px] px-3 py-2">
                      <button
                        onClick={() =>
                          handleStatusChange(
                            domain._id,
                            "default",
                            domain.status === "enabled" ? "disabled" : "enabled"
                          )
                        }
                        className=" underline text-blue-600"
                      >
                        {domain.status === "enabled"
                          ? "Disable URL"
                          : "Enable URL"}
                      </button>
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>

        {/* ======== Mobile Stack Layout ===== */}
        <div className="sm:hidden space-y-4 p-2">
          {data?.user?.defaultDomains?.length &&
            (data?.user?.defaultDomains as TDomain[])?.map((domain, i) => (
              <div
                key={domain._id}
                className="border border-slate-300 rounded-md p-3 bg-white shadow-sm"
              >
                <div className="flex max-w-[200px] gap-2 ">
                  <span className="font-semibold">#</span>
                  <span>{i + 1}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold min-w-[75px]">URL :</span>
                  <span>{domain.url}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold min-w-[75px]">Title :</span>
                  <span>No title</span>
                </div>
                <div className="flex">
                  <span className="font-semibold min-w-[75px]">Status :</span>
                  <span>{domain.status}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold min-w-[75px]">
                    Execution Time :
                  </span>
                  <span>{data?.user?.subscription?.intervalInMs || ""}</span>
                </div>
                <div className="flex mt-1">
                  <span className="font-semibold min-w-[75px]">Actions :</span>
                  <button
                    onClick={() =>
                      handleStatusChange(
                        domain._id,
                        "default",
                        domain.status === "enabled" ? "disabled" : "enabled"
                      )
                    }
                    className={`rounded-[10px] mr-10 duration-200 text-white px-3 ${
                      domain.status === "enabled"
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {domain.status === "enabled" ? "Disable URL" : "Enable URL"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </DashboardContainer>
  );
}
