import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import LoadingSpinner from "../loading/LoadingSpinner";
import NotAuthorized from "../shared/NotAuthorized";

export default function AuthAdminWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );
  if (!isUserLoading)
    return (
      <LoadingSpinner
        totalVisuals={3}
        containerClass="w-3 md:w-4 h-3 2xl:h-4"
      />
    );

  if (!authUser || authUser.role !== "admin") return <NotAuthorized />;

  return <>{children}</>;
}
