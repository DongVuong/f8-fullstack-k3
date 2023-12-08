import Link from "next/link";
import Image from "next/image";
import notFoundImage from "../assets/image/404.jpg";

const NotFound = () => {
  return (
    <div>
      <Image
        src={notFoundImage}
        alt="404 not found"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Link href={"/"}>Về trang chủ</Link>
    </div>
  );
};

export default NotFound;
