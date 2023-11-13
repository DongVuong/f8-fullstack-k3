import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import EmailJs from "./EmailJs";

function MainContent() {
  const { logout, loginWithPopup, isAuthenticated } = useAuth0();
  return (
    <div className="MuiPaper-root">
      <div className="MuiCardContent-root">
        {isAuthenticated ? (
          <>
            <EmailJs />
            <button className="button" onClick={() => logout()}>
              ĐĂNG XUẤT
            </button>
          </>
        ) : (
          <>
            <h1 className="title">Cảm ơn bạn đã sử dụng dịch vụ của F8</h1>
            <p className="content">
              Nếu có bất kỳ câu hỏi hay trợ giúp nào, hãy đăng nhập và đặt câu
              hỏi tại đây!
            </p>
            <button className="button" onClick={() => loginWithPopup()}>
              ĐĂNG KÝ || ĐĂNG NHẬP
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MainContent;
