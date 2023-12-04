"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../../i18nConfig";
import Link from "next/link";

function LanguageChange() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const date = new Date();
    const days = 30;
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  return (
    <select onChange={handleChange} value={currentLocale}>
      <option value="en">English</option>
      <option value="vi">Viet Nam</option>
    </select>
  );
}

export default LanguageChange;
