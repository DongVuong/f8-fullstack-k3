import React from "react";
import { BaseEdge, getBezierPath } from "reactflow";

function MindMapEdge(props) {
  const { sourceX, sourceY, targetX, targetY } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY: sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge path={edgePath} {...props} />;
}

export default MindMapEdge;
