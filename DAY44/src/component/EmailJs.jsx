import React, { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.css";

function EmailJs() {
  const [status, setStatus] = useState(false);
  const addLoading = () => {
    buttonRef.current.innerHTML = `<span class="spinner-border spinner-border-sm"></span>Loading`;
    buttonRef.current.disabled = true;
  };
  const buttonRef = useRef();
  const removeLoading = () => {
    buttonRef.current.innerHTML = `Yêu cầu hỗ trợ`;
    buttonRef.current.disabled = false;
  };
  const { user } = useAuth0();
  const handleSubmit = (e, name) => {
    addLoading();
    e.preventDefault();
    const templateParams = {
      to_name: "Ngài",
      name,
      message: e.target.message.value,
      from_email: e.target.email.value,
    };
    const serviceId = "service_2eibrhs";
    const templateId = "template_ls0owo1";
    const publicKey = "fQB14WxSFpj731fAU";
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Gửi email thành công!");
      })
      .catch(() => {
        toast.error("Gửi email thất bại! Hãy thử lại!");
      })
      .finally(() => {
        removeLoading();
        setStatus(!status);
      });
  };

  return (
    <div className="profile">
      <div className="images">
        <img src={user.picture} alt={user.name} />
      </div>
      <h6>
        Xin chào <b>{user.name}</b>!
      </h6>
      <form onSubmit={(e) => handleSubmit(e, user.name)}>
        <div className="input-box">
          <input
            type="text"
            id="email"
            name="email"
            required
            defaultValue={user.email}
            placeholder=" "
          />
          <label htmlFor="email">Email của bạn *</label>
        </div>
        <div className="input-box">
          <textarea
            placeholder=" "
            type="text"
            id="message"
            name="message"
            required
            defaultValue="Tôi cần trợ giúp bài tập về nhà!"
          ></textarea>
          <label htmlFor="message">Tin nhắn *</label>
        </div>
        <button ref={buttonRef}>Yêu cầu hỗ trợ</button>
      </form>
    </div>
  );
}

export default EmailJs;
