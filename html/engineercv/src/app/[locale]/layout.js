import Navigation from "@/components/Navigation";
import ThemesProvider from "@/context/ThemesProvider";
import "./layout.scss";
import { getDictionary } from "@/getDictionary";

export default async function layout({ children, params }) {
  const lang = await getDictionary(params.locale);
  return (
    <>
      <head>
        <meta name="description" content={lang.description} />
        <title>portfolio of Dong</title>
      </head>
      <body>
        <ThemesProvider>
          <div className="container">
            <Navigation lang={lang} />
            {children}
          </div>
        </ThemesProvider>
      </body>
    </>
  );
}
