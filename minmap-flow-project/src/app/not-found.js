import Link from "next/link";
import Image from "next/image";
import notFoundImage from "../assets/images/404.png";
import "./not-found.scss";

const NotFound = () => {
  return (
    <body>
      <div className="notFound">
        <Image
          src={notFoundImage}
          alt="404 not found"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Link className="backHome" href={"/"}>
          Về trang chủ
        </Link>
      </div>
    </body>
  );
};

export default NotFound;
