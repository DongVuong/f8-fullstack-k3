import Navigation from "@/components/Navigation";
import ThemesProvider from "@/context/ThemesProvider";
import "./layout.scss";

export const metadata = {
  title: "F8 Portfolio",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemesProvider>
          <Navigation />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
