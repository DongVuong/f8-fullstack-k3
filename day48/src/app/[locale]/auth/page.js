import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { cookies } from "next/headers";

export default function AuthPage() {
  const cookieStore = cookies();
  // const checkCookie = cookieStore.get("__Secure-next-auth.session-token");
  // const checkCookie = cookieStore.get("next-auth.session-token");
  const checkCookie = cookieStore.get(process.env.CLIENT_COOKIE);

  return <>{checkCookie ? <Logout /> : <Login />}</>;
}
