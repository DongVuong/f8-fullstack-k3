import "./info.scss";

export default function Info({ lang }) {
  return (
    <div className="info">
      <div className="header-title">
        <div className="title" style={{ fontWeight: "700" }}>
          <p>{lang.contact.infoContact}</p>
          <hr />
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
          <p>
            {lang.contact.addressTitle}:<a href="#!">{lang.contact.address}</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="my-project">
        <div className="title" style={{ fontWeight: "700" }}>
          <p>{lang.experience.name}</p>
          <hr />
        </div>
        <div className="content">
          <h3>{lang.experience.name1} (2018-2021) </h3>
          <h4>{lang.experience.name2}</h4>
          <ul>
            <li>{lang.experience.name3}</li>
            <li>{lang.experience.name4}</li>
            <li>{lang.experience.name5}</li>
            <li>{lang.experience.name6}</li>
          </ul>
        </div>
        <hr />
        <div className="content">
          <h3>{lang.experience2.name1} (2021-2023) </h3>
          <h4>{lang.experience2.name2}</h4>
          <ul>
            <li>{lang.experience2.name3}</li>
            <li>{lang.experience2.name4}</li>
            <li>{lang.experience2.name5}</li>
            <li>{lang.experience2.name6}</li>
            <li>{lang.experience2.name7}</li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="footer">
        <p>{lang.description}</p>
      </div>
    </div>
  );
}
