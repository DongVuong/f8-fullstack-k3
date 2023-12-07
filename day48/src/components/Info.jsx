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
            Tel:
            <a target="_blank" href="tel: 0357743621">
              0357743621
            </a>
          </p>
          <p>
            Gmail:
            <a target="_blank" href="mailto: donguet.vnu@gmail.com">
              donguet.vnu@gmail.com
            </a>
          </p>
          <p>
            Facebook:
            <a target="_blank" href="https://www.facebook.com/VuonggDongg">
              https://www.facebook.com/VuonggDongg
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
            <h4>Project blog</h4>
            <p>{lang.blog.p1}</p>
            <p>{lang.blog.p2}</p>
            <div className="link-demo">
              <div className="demo">
                <a
                  href="https://dongvuong.github.io/f8-fullstack-k3/DAY39/index.html"
                  target="_blank"
                >
                  Demo
                </a>
                <p className="show-demo">
                  https://dongvuong.github.io/f8-fullstack-k3/DAY39/index.html
                </p>
              </div>
              <div className="code">
                <a
                  href="https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY39"
                  target="_blank"
                >
                  Code
                </a>
                <p className="show-code">
                  https://github.com/DongVuong/f8-fullstack-k3/tree/main/DAY39
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
          <a href="https://github.com/DongVuong" target="_blank">
            https://github.com/DongVuong
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
