import Navigation from "@/components/Navigation";
import ThemesProvider from "@/context/ThemesProvider";
import "./layout.scss";
import { getDictionary } from "@/getDictionary";

export default async function layout({ children, params }) {
  const lang = await getDictionary(params.locale);
  return (
    <html lang={params.lang}>
      <head>
        <meta name="description" content={lang.description} />
        <title>F8 portfolio</title>
      </head>
      <body>
        <ThemesProvider>
          <div className="container">
            <Navigation lang={lang} />
            {children}
          </div>
        </ThemesProvider>
      </body>
    </html>
  );
}
