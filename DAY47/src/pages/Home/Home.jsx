import React, { useEffect } from "react";
import "./Home.scss";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../stores/middleware/getTaskMiddleware";
function Home() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.todo.isLogin);
  useEffect(() => {
    if (isLogin) {
      dispatch(getTasks());
    }
  }, [isLogin]);
  return (
    <main>
      <div className="todo">
        <Content />
      </div>
    </main>
  );
}

export default Home;
