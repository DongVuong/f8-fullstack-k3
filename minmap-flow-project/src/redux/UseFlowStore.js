import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import { createWithEqualityFn } from "zustand/traditional";
import { nanoid } from "nanoid/non-secure";

const useFlowStore = createWithEqualityFn((set, get) => {
  return {
    nodes: [
      {
        id: "root",
        type: "myCustomNode",
        data: { label: "New Node" },
        position: { x: 0, y: 50 },
      },
    ],
    edges: [
      {
        id: "r-1",
        source: "root",
        target: "1",
      },
    ],
    setDataFlow: ({ nodes, edges, isInteractive }) => {
      set({ nodes, edges, isInteractive });
    },

    onNodesChange: (changes) => {
      const newChanges = changes
        .map((item) => {
          if (item.type === "remove" && item.id === "root") {
            return null;
          }
          return item;
        })
        .filter((c) => c);
      // console.log(newChanges);
      set({
        nodes: applyNodeChanges(newChanges, get().nodes),
      });
    },
    onEdgesChange: (changes) => {
      // console.log(changes);
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    addChildNode: (parentNode, position) => {
      const newNode = {
        id: nanoid(),
        type: "myCustomNode",
        data: { label: `Node ${get().nodes.length}` },
        position,
        parentNode: parentNode.id,
      };
      const newEdge = {
        id: nanoid(),
        source: parentNode.id,
        target: newNode.id,
      };

      set({
        nodes: [...get().nodes, newNode],
        edges: [...get().edges, newEdge],
      });
    },
    onConnect: (changes) => {
      // console.log(changes);
      set({
        edges: addEdge({ ...changes }, get().edges),
      });
    },
    // onNodeDelete: (deleted) => {
    //   const newNode = get()
    //     .nodes.map((item) => {
    //       if (item.id !== "root" && item.id === deleted[0].id) {
    //         return null;
    //       }
    //       return item;
    //     })
    //     .filter((c) => c);
    //   set({
    //     nodes: applyNodeChanges(newNode, get().nodes),
    //     edges: deleted.reduce((acc, node) => {
    //       const incomers = getIncomers(node, get().nodes, get().edges);
    //       const outGoers = getOutgoers(node, get().nodes, get().edges);
    //       const connectedEdges = getConnectedEdges([node], get().edges);
    //       const remainingEdges = acc.filter(
    //         (edge) => !connectedEdges.includes(edge)
    //       );

    //       const createdEdges = incomers.flatMap(({ id: source }) =>
    //         outGoers.map(({ id: target }) => ({
    //           id: `${source}->${target}`,
    //           source,
    //           target,
    //         }))
    //       );

    //       return [...remainingEdges, ...createdEdges];
    //     }, get().edges),
    //   });
    // },
    setIsInteractive: (changes) => {
      set({
        isInteractive: changes,
      });
    },
    updateNodeLabel: (nodeId, label) => {
      set({
        nodes: get().nodes.map((node) => {
          if (node.id === nodeId) {
            // it's important to create a new object here, to inform React Flow about the changes
            node.data = { ...node.data, label };
          }

          return node;
        }),
      });
    },
  };
});

export default useFlowStore;
