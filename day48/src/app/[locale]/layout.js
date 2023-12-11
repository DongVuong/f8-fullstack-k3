"use client";
import Navigation from "@/components/Navigation";
import ThemesProvider from "@/context/ThemesProvider";
import "./layout.scss";
import { getDictionary } from "@/getDictionary";
import { SessionProvider } from "next-auth/react";
import { Fragment } from "react";

export default async function layout({ children, params }) {
  const lang = await getDictionary(params.locale);
  return (
    <Fragment>
      <head>
        <meta name="description" content={lang.description} />
        <title>F8 portfolio</title>
      </head>
      <body>
        <SessionProvider>
          <ThemesProvider>
            <div className="container">
              <Navigation lang={lang} />
              {children}
            </div>
          </ThemesProvider>
        </SessionProvider>
      </body>
    </Fragment>
  );
}
