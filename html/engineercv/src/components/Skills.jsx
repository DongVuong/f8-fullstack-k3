import Image from "next/image";
import Dong from "../assets/image/Dong.jpeg";
import "./skill.scss";

export default function Skills({ lang }) {
  return (
    <div className="skills">
      <figure className="figure">
        <div className="image-shadow">
          <Image width={277} height={277} src={Dong} alt="Dong" />
        </div>
        <figcaption
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
            color: "orange",
            fontSize: "2rem",
          }}
        >
          {lang.skills.name}
        </figcaption>
      </figure>
      <div className="show-skills" style={{ lineHeight: "1.2rem" }}>
        <div className="my-skill">
          <h3 style={{ textAlign: "center", fontWeight: "700" }}>
            {lang.skills.name1}
          </h3>
          <p>{lang.skills.name2}</p>
          <p> {lang.skills.name3} (2013-2018)</p>
          <p>GPA: 2.82</p>
          <hr />
        </div>
        <div className="my-skill">
          <h3 style={{ textAlign: "center", fontWeight: "700" }}>
            {lang.skillsTokkui.name}
          </h3>
          <u>Microsoft Office</u>
          <p>{lang.skillsTokkui.office}</p>
          <u>{lang.skillsTokkui.japan}</u>
          <p>JNPT N3</p>
          <u>{lang.skillsTokkui.english}</u>
          <p>550 TOIEC</p>
          <u>{lang.skillsTokkui.name2}</u>
          <p>NX, ANSA, SIMLAB, ABAQUS CAE</p>
          <hr />
          <p>
            <b></b>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}
