"use client";
import React, { useCallback, useMemo, useRef } from "react";
import ReactFlow, {
  Controls,
  Panel,
  useStoreApi,
  useReactFlow,
  ReactFlowProvider,
  ConnectionLineType,
} from "reactflow";
import { shallow } from "zustand/shallow";

import useFlowStore from "../redux/UseFlowStore";
import MindMapNode from "./MindMapNode";
import MindMapEdge from "./MindMapEdge";
import "reactflow/dist/style.css";
import "./index.css";

// we need to import the React Flow styles to make it work
const nodeTypes = {
  myCustomNode: MindMapNode,
};

const edgeTypes = {
  myCustomEdge: MindMapEdge,
};
const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
  onConnect: state.onConnect,
  onNodeDelete: state.onNodeDelete,
});
const nodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: "#FFA500", strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: "myCustomEdge" };

function Flow() {
  // whenever you use multiple values, you should use shallow for making sure that the component only re-renders when one of the values change
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    addChildNode,
    onConnect,
    // onNodeDelete,
  } = useFlowStore(selector, shallow);
  const connectingNodeId = useRef(null);
  const store = useStoreApi();
  const { screenToFlowPosition } = useReactFlow();

  const getChildNodePosition = (event, parentNode) => {
    const { domNode } = store.getState();

    if (
      !domNode ||
      // we need to check if these properites exist, because when a node is not initialized yet,
      // it doesn't have a positionAbsolute nor a width or height
      !parentNode?.positionAbsolute ||
      !parentNode?.width ||
      !parentNode?.height
    ) {
      return;
    }

    const isTouchEvent = "touches" in event;
    const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const y = isTouchEvent ? event.touches[0].clientY : event.clientY;
    // we need to remove the wrapper bounds, in order to get the correct mouse position
    const panePosition = screenToFlowPosition({
      x,
      y,
    });

    // we are calculating with positionAbsolute here because child nodes are positioned relative to their parent
    return {
      x: panePosition.x - parentNode.positionAbsolute.x + parentNode.width / 2,
      y: panePosition.y - parentNode.positionAbsolute.y + parentNode.height / 2,
    };
  };

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      const { nodeInternals } = store.getState();
      const targetIsPane = event.target.classList.contains("react-flow__pane");
      const node = event.target.closest(".react-flow__node");

      if (node) {
        node.querySelector("input")?.focus({ preventScroll: true });
      } else if (targetIsPane && connectingNodeId.current) {
        const parentNode = nodeInternals.get(connectingNodeId.current);
        const childNodePosition = getChildNodePosition(event, parentNode);

        if (parentNode && childNodePosition) {
          addChildNode(parentNode, childNodePosition);
        }
      }
    },
    [getChildNodePosition]
  );

  return (
    <div className="wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onConnect={onConnect}
        // onNodesDelete={onNodeDelete}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SimpleBezier}
        nodeOrigin={nodeOrigin}
        fitView
      >
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}

const Flow2 = () => (
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
);
export default Flow2;
