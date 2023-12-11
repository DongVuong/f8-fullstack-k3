"use client";

import { Fragment, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import "./logout.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Logout() {
  const data = useSession();
  console.log(data);
  return (
    <Fragment>
      <ToastContainer />
      <div className="container-logout">
        <div className="Profile">
          <Image
            src={data?.data?.user.image}
            width={100}
            height={100}
            alt="avatar"
          />
          <h2>{data?.data?.user?.name}</h2>
        </div>
        <div>
          {" "}
          <button className="btn-logout" onClick={() => signOut()}>
            Đăng Xuất
          </button>
          <Link href="/">
            <button>Go home</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
