import {
  setAuthUser,
  setUserDataLoading,
} from "@/redux/features/auth/AuthSlice";
import { useLazyGetProfileQuery } from "@/redux/features/userAction/userActionApi";
import { RootState } from "@/redux/store";
import { deleteToken, getToken } from "@/utils/token";
import { getRole, isTokenExpired } from "@/utils/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InitialProfileLoader() {
  const dispatch = useDispatch();
  const [getProfile] = useLazyGetProfileQuery();
  const { authUser, isUserLoading } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (authUser) {
      isUserLoading && dispatch(setUserDataLoading(false));
      return;
    }

    const loadProfile = async () => {
      // validate token
      const accessToken = getToken("accessToken");
      if (!accessToken || isTokenExpired(accessToken))
        return dispatch(setUserDataLoading(false));

      //  validation user role
      const ALLOWED_ROLES = ["user", "admin"];
      const role = getRole(accessToken);

      if (!role || !ALLOWED_ROLES.includes(role)) {
        deleteToken("accessToken");
        deleteToken("refreshToken");
        authUser && dispatch(setAuthUser(null));
        isUserLoading && dispatch(setUserDataLoading(false));
        return;
      }

      try {
        const res = await getProfile({}).unwrap();
        if (res.success) {
          dispatch(setAuthUser(res.user));
        } else {
          throw new Error(res.message);
        }
      } catch (error:any) {
        if(error?.status ===403){
          deleteToken("accessToken");
          deleteToken("refreshToken")
        }
        // toast.error(error?.data?.message);
        console.log(error);
      } finally {
        dispatch(setUserDataLoading(false));
      }
    };

    loadProfile();
  }, []);

  return <></>;
}
