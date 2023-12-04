"use client";

import { useTranslation } from "react-i18next";

function Content() {
  const { t } = useTranslation();
  return <h1>{t("language")}</h1>;
}

export default Content;
