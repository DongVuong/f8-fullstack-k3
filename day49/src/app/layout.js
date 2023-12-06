import ThemesProvider from "@/context/ThemesProvider";
import Providers from "@/redux/Providers";
import "./layout.scss";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemesProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </ThemesProvider>
      </body>
    </html>
  );
}
