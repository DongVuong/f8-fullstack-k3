import React, { useRef, useEffect, useLayoutEffect } from "react";
import { Handle, Position } from "reactflow";

import useFlowStore from "../redux/UseFlowStore";

function MindMapNode({ id, data }) {
  const inputRef = useRef();
  const updateNodeLabel = useFlowStore((state) => state.updateNodeLabel);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${data.label.length * 12}px`;
    }
  }, [data.label.length]);

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    }, 1);
  }, []);

  return (
    <>
      {id !== "root" && <Handle type="target" position={Position.Top} />}
      <div className="inputWrapper">
        <input
          value={data.label}
          onChange={(evt) => updateNodeLabel(id, evt.target.value)}
          className="input"
          ref={inputRef}
        />
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
}

export default MindMapNode;
