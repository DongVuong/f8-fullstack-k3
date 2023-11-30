import React from "react";
import { useSelector } from "react-redux";
import ListColumn from "../../components/ListColumn/ListColumn";
import "./Content.scss";
function content() {
  const columns = useSelector((state) => state.todo.columns);

  return <div className="board">{columns.length > 0 && <ListColumn />}</div>;
}

export default content;
