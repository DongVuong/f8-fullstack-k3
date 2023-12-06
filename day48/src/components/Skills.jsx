import Image from "next/image";
import f8Avatar from "../assets/image/F8.jpeg";
import "./skill.scss";

export default function Skills({ lang }) {
  return (
    <div className="skills">
      <figure className="figure">
        <div className="image-shadow">
          <Image width={277} height={277} src={f8Avatar} alt="f8Avatar" />
        </div>
        <figcaption
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Front-end developer
        </figcaption>
      </figure>
      <div className="show-skills">
        <div className="my-skill">
          <h3>{lang.mySkill.title}</h3>
          <p>
            <b>{lang.mySkill.work}: </b>
            <span>
              REST API, React.js, Next.js, Redux, Context, CSS3, HTML5, UI/UX,
              Figma, Photoshop...
            </span>
          </p>
          <hr />
          <p>
            <b>{lang.mySkill.otherSkill}: </b>
            <span>
              Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm việc, kỹ
              năng làm việc nhóm tốt so với độ tuổi.
            </span>
          </p>
        </div>
        <div className="history">
          <h3>{lang.history.title}</h3>
          <p>
            <b>2016: </b>
            <span>{lang.history.about1}</span>
          </p>
          <hr />
          <p>
            <b>2017-2019: </b>
            <span>{lang.history.about2}</span>
          </p>
          <hr />
          <p>
            <b>2019-2021: </b>
            <span>{lang.history.about3}</span>
          </p>
          <hr />
          <p>
            <b>2022-2026: </b>
            <span>{lang.history.about4}</span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
