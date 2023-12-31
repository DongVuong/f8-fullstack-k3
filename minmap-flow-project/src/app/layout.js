import { UserProvider } from "@auth0/nextjs-auth0/client";
import Providers from "../redux/Providers";
export const metadata = {
  title: "Mind Map Flow",
  description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  // openGraph: {
  //   title: "Mind Map Flow",
  //   description: "Mindmap Flow - Công cụ xây dựng sơ đồ tư duy mạnh mẽ",
  // images: [
  //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Findec.vn%2F5-phan-mem-ve-so-do-tu-duy-mien-phi-hieu-qua-nhat%2F&psig=AOvVaw0NVvNBN1wOG_HlwpmB_Ek0&ust=1703087604478000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCZh_Htm4MDFQAAAAAdAAAAABAD",
  // ],
  // },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserProvider>{children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
