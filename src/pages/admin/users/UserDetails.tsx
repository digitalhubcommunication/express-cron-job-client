import LoadingSpinner from "@/components/loading/LoadingSpinner";
import PageLoading from "@/components/loading/PageLoading";
import ErrorMessage from "@/components/shared/ErrorMessage";
import DashboardContainer from "@/components/wrapper/DashboardContainer";
import ToggleButton from "@/pages/shared/ToggleButton";
import {
  useGetSingleUserQuery,
  useRemoveUserPackageMutation,
  useUpdateUserMutation,
} from "@/redux/features/adminActions/adminActions";
import { IUser, TDomain, TManualDomain } from "@/types/types";
import { getExpiryText, isDateExpired } from "@/utils/utils";
import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import AssignPackage from "./components/AssignPackage";
import UserDomainCard from "./components/UserDomainCard";
import SendMessageBtn from "./components/SendMessageBtn";

type TUpdateAction =
  | "STATUS"
  | "PERMISSION"
  | "URLS_STATUS"
  | "PACKAGE_UPDATE"
  | "DOMAIN_UPDATE"
  | null;

export default function UserDetails() {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleUserQuery(id);
  const [update] = useUpdateUserMutation();
  const [updateAction, setUpdateAction] = useState<TUpdateAction>(null);
  const [removeUserPackage] = useRemoveUserPackageMutation();
  const [loading, setLoading] = useState(false);

  const user = data?.user || ({} as IUser);

  //   handlers
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

  const handleRemovePackage = async (userId: string) => {
    try {
      const res = await removeUserPackage({ userId }).unwrap();
      if (res.success) {
        toast.success(res?.message);
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  // callback functions
  const status_CB = () => {
    setUpdateAction("STATUS");
    updateUserInfo({
      status: user?.status === "enabled" ? "disabled" : "enabled",
    });
  };

  const ATAMD_CB = () => {
    setUpdateAction("PERMISSION");
    updateUserInfo({
      allowedToAddManualDomains: !user?.allowedToAddManualDomains,
    });
  };

  // conditional return
  if (isFetching) return <PageLoading />;

  if (!id || !data?.user)
    return <ErrorMessage key="NO_USER_FOUND" msg="No user found" />;

  const active = !isDateExpired(user?.packageExpiresAt || "");
  return (
    <DashboardContainer
      className={loading ? "py-10 pointer-events-none" : "py-10"}
    >
      <div className="flex gap-10">
        <div className="w-full">
          <p className="">
            <span className="font-semibold">Name :</span> {user?.name || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Role :</span> {user?.role || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Subscription :</span>{" "}
            {user?.subscription?.name || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Username :</span>{" "}
            {user?.username || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Phone :</span> {user?.mobile || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Email :</span> {user?.email || ""}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Domain :</span> {user?.domain || ""}
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold">Status :</span>{" "}
            {updateAction === "STATUS" && loading ? (
              <LoadingSpinner
                className="min-h-[39.81px]"
                containerClass="w-3 md:w-4 h-3 2xl:h-4"
              />
            ) : (
              <ToggleButton
                onToggle={status_CB}
                size="sm"
                label={user?.status}
                isActive={user?.status === "enabled"}
              />
            )}
          </div>

          <div className="mt-1 flex items-center gap-2">
            <span className="font-semibold">Allowed to add manual urls : </span>{" "}
            <ToggleButton
              onToggle={ATAMD_CB}
              size="sm"
              label={user?.allowedToAddManualDomains ? "ONN" : "OFF"}
              isActive={user?.allowedToAddManualDomains}
            />
          </div>
        </div>
        <div className="w-full">
          <p className="mt-1">
            <span className="font-semibold">Telegram ID :</span>{" "}
            {user?.telegramId || "null"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Telegram connected :</span>{" "}
            {user?.telegramConnected ? "Yes" : "No"}
          </p>
          <p className="mt-1">
            <span className="font-semibold">Total Manual Cron : </span>{" "}
            {user?.manualDomains?.length || 0}
          </p>
            <p className="mt-1">
            <span className="font-semibold">Total Manual Cron Added :</span>{" "}
            {user?.manualCronCount || 0}
          </p>

          <p className="mt-1">
            <span className="font-semibold">Expiry Date :</span>{" "}
            {user?.packageExpiresAt
              ? getExpiryText(user?.packageExpiresAt).date
              : "Not found"}
          </p>

          {/* ==== */}
          <p className="mt-1">
            <span className="font-semibold">Account created on :</span>{" "}
            {user?.createdAt
              ? getExpiryText(user?.createdAt).date
              : "Not found"}
          </p>
          <div className="w-full flex items-center justify-between max-w-[320px] mt-5">
            {loading && updateAction === "PACKAGE_UPDATE" ? (
              <div className="w-full flex start">
                <LoadingSpinner
                  totalVisuals={3}
                  containerClass="w-5 md:w-6 h-6 2xl:h-6"
                />
              </div>
            ) : active ? (
              <button
                onClick={() => handleRemovePackage(user?._id)}
                className="py-1 rounded-md px-3.5 bg-red-500 hover:bg-red-600 text-white"
              >
                Remove Package
              </button>
            ) : (
              <AssignPackage
                loading={loading}
                id={user?._id}
                setLoading={setLoading}
              />
            )}
            <SendMessageBtn id={user._id} name={user.name} email={user.email} />
          </div>
        </div>
      </div>

      <h6 className="mb-3 font-semibold mt-10">Default Domains</h6>
      <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-5 mt-5">
        {user?.defaultDomains?.length &&
          user?.defaultDomains.map((domain: TDomain) => (
            <UserDomainCard
              userId={id}
              domain={{
                ...domain,
                domainType: "default",
                title: "No title",
                executeInMs: user.subscription?.intervalInMs,
              }}
            />
          ))}
      </div>

      <h6 className="mb-3 font-semibold mt-10">Manual Domains</h6>
      <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(600px,1fr))] gap-5 mt-5">
        {user?.manualDomains?.length &&
          user?.manualDomains.map((domain: TManualDomain) => (
            <UserDomainCard
              userId={id}
              domain={{ ...domain, domainType: "manual" }}
            />
          ))}
      </div>
    </DashboardContainer>
  );
}
