import React from "react";
import { nanoid } from "nanoid/non-secure";
import { ISOextractDateTime } from "../../helpers/dateTime";
function AddBtn({ postMinMap, email }) {
  const handleAdd = () => {
    const time = new Date();
    const newMindMap = {
      mindMapId: nanoid(),
      name: "MindMap không có tên",
      description: "Chưa có mô tả",
      map: {
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
        isInteractive: true,
      },
      isAccessible: false,
      userEmail: email,
      create_at: ISOextractDateTime(time),
    };
    // postMinMap(newMindMap);
    // dispatch(setIsLoading(true));
  };
  return (
    // <div className="py-4">
    //   <button
    //     onClick={handleAdd}
    //     className="text-300 rounded-lg bg-blue-500 py-2 px-6 w-fit shadow-[0_2px_2px_1px_rgba(4,63,135,0.8)] mb-1 active:mb-0 active:shadow-[0_0_0_0_rgba(4,63,135,0.8)]"
    //   >
    //     Thêm mới
    //   </button>
    // </div>
    <div className="py-4">
      <a
        className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300"
        href="/my-mindmap/create"
      >
        Thêm mới
      </a>
    </div>
  );
}

export default AddBtn;
