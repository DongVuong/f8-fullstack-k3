import Login from "@/components/Login";
import Logout from "@/components/Logout";
import { cookies } from "next/headers";

export default function AuthPage() {
  const cookieStore = cookies();
  const checkCookie = cookieStore.get("__Secure-next-auth.session-token");

  return <>{checkCookie ? <Logout /> : <Login />}</>;
}
