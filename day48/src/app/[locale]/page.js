import React from "react";
import initTranslations from "../i18n";
import TransitionProvider from "@/context/TransitionProvider";
import Content from "@/components/Content";
const i18nNamespaces = ["home"];

async function page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TransitionProvider locale={locale} resources={resources}>
      <main>
        <Content />
      </main>
    </TransitionProvider>
  );
}

export default page;
