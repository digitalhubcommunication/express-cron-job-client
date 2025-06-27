// authLoader.ts
import { redirect } from "react-router-dom";

export const authLoader = async () => {
  const res = await fetch("/api/me", { credentials: "include" }); // backend checks token
  if (res.status === 401) return redirect("/login");
  const user = await res.json();
  return user;                           // becomes loader data if logged in
};
