import "./info.scss";

export default function Info({ lang }) {
  return (
    <div className="info">
      <div className="header-title">
        <div className="title">
          <p>{lang.contact.infoContact}</p>
        </div>
        <div className="contact">
          <p>
            Phone:{" "}
            <a target="_blank" href="tel: 0987654321">
              0987654321
            </a>
          </p>
          <p>
            Zalo:{" "}
            <a target="_blank" href="https://zalo.me">
              https://zalo.me
            </a>
          </p>
          <p>
            Email:{" "}
            <a target="_blank" href="mailto: contact@fullstack.edu.vn">
              contact@fullstack.edu.vn
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              target="_blank"
              href="https://www.facebook.com/groups/f8official"
            >
              https://www.facebook.com/groups/f8official
            </a>
          </p>
          <p>
            Youtube:{" "}
            <a target="_blank" href="https://www.youtube.com/c/F8VNOfficial">
              https://www.youtube.com/c/F8VNOfficial
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className="my-project">
        <div className="title">
          <h3>{lang.projects.infoProject}</h3>
        </div>
        <div className="info-project">
          <div className="project">
            <h4>Project Code snippet</h4>
            <p>{lang.snippet.p1}</p>
            <p>{lang.snippet.p2}</p>
            <div className="link-demo">
              <div className="demo">
                <a href="https://codefast.vercel.app/" target="_blank">
                  Demo
                </a>
                <p className="show-demo">https://codefast.vercel.app/</p>
              </div>
              <div className="code">
                <a
                  href="https://github.com/duongnguyenf8/demo_custom-element"
                  target="_blank"
                >
                  Code
                </a>
                <p className="show-code">
                  https://github.com/duongnguyenf8/demo_custom-element
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="project">
            <h4>Project blog</h4>
            <p>{lang.blog.p1}</p>
            <p>{lang.blog.p2}</p>
            <div className="link-demo">
              <div className="demo">
                <a
                  href="https://code-exercise-blog.vercel.app/"
                  target="_blank"
                >
                  Demo
                </a>
                <p className="show-demo">
                  https://code-exercise-blog.vercel.app/
                </p>
              </div>
              <div className="code">
                <a
                  href="https://github.com/duongnguyenf8/code_exercise-blog"
                  target="_blank"
                >
                  Code
                </a>
                <p className="show-code">
                  https://github.com/duongnguyenf8/code_exercise-blog
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="project">
            <h4>Project 2048</h4>
            <p>{lang.game.p1}</p>
            <p>{lang.game.p2}</p>
            <div className="link-demo">
              <div className="demo">
                <a
                  href="http://f8-2048.sanphamkythuat.online:880/"
                  target="_blank"
                >
                  Demo
                </a>
                <p className="show-demo">
                  http://f8-2048.sanphamkythuat.online:880/
                </p>
              </div>
              <div className="code">
                <a href="https://github.com/duongnguyenf8/20f8" target="_blank">
                  Code
                </a>
                <p className="show-code">
                  https://github.com/duongnguyenf8/20f8
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="source-project">
          <a href="https://github.com/duongnguyenf8" target="_blank">
            https://github.com/duongnguyenf8
          </a>
        </div>
      </div>
      <div className="my-hobby">
        <div className="title">
          <h3>{lang.myHobby.title}</h3>
        </div>
        <ul className="list-hobby">
          <li>{lang.myHobby.li1}</li>
          <li>{lang.myHobby.li2}</li>
          <li>{lang.myHobby.li3}</li>
        </ul>
      </div>
      <div className="footer">
        <p>© 2023 Fullstack.edu.vn F8. All rights reserved.</p>
      </div>
    </div>
  );
}
