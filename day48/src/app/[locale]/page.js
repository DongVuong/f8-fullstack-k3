import Info from "@/components/Info";
import Skills from "@/components/Skills";
import { getDictionary } from "@/getDictionary";

export default async function Page({ params }) {
  const lang = await getDictionary(params.locale);
  return (
    <div className="container-main">
      <div className="title">
        <p> Vương Đông </p>
        <p className="info-title">{lang.infoTitle.hoverTitle}</p>
      </div>
      <main style={{ display: "flex", gap: "30px" }}>
        <Skills lang={lang} />
        <Info lang={lang} />
      </main>
    </div>
  );
}
