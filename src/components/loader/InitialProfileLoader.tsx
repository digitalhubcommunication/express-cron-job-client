import {
  setAuthUser,
  setUserDataLoading,
} from "@/redux/features/auth/AuthSlice";
import { RootState } from "@/redux/store";
import { deleteUserInfo, getUserInfo } from "@/utils/token";
import { getRole, isTokenExpired } from "@/utils/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InitialProfileLoader() {
  const dispatch = useDispatch();
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (authUser) {
      isUserLoading && dispatch(setUserDataLoading(false));
      return;
    }

    // get the user
    const user = getUserInfo();
    if (!user) {
      authUser && dispatch(setAuthUser(null));
      isUserLoading && dispatch(setUserDataLoading(false));
      return;
    }

    // check user validation
    const ALLOWED_ROLES = ["user", "admin"];
    const role = getRole(user.accessToken);
    if (
      isTokenExpired(user.accessToken) ||
      !role ||
      !ALLOWED_ROLES.includes(role)
    ) {
      authUser && dispatch(setAuthUser(null));
      isUserLoading && dispatch(setUserDataLoading(false));
      deleteUserInfo();
      return;
    }

    dispatch(setAuthUser(user));
    isUserLoading && dispatch(setUserDataLoading(false));
  }, []);

  return <></>;
}
