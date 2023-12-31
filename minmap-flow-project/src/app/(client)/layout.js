import Header from "../../Layout/Header";
import "./layout.scss";
import Footer from "../../Layout/Footer";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ServerLayout({ children }) {
  let data = await getSession();
  data = JSON.parse(JSON.stringify(data));
  return (
    <main>
      <Header data={data} />
      {children}
      <Footer />
    </main>
  );
}
