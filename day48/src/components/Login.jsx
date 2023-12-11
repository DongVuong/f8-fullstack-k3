"use client";
import { signIn } from "next-auth/react";
import "./login.scss";
import Link from "next/link";

function Login() {
  return (
    <div className="container-login">
      <div>
        {" "}
        <button onClick={() => signIn()}>Sign In</button>
        <Link href="/">
          <button>Go home</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
