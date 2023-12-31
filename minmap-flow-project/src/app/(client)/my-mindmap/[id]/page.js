import Flow from "../../../../components/Flow";
import SaveButton from "../../../../components/SaveButton";

export const generateMetadata = () => {
  return {
    title: `Mindmap không có tên`,
  };
};

function MindMap() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-4/5">
            <h1
              className="text-2xl md:text-4xl font-medium my-2 outline-0"
              contentEditable="true"
              spellCheck="false"
              suppressContentEditableWarning="true"
            >
              Mindmap không có tên
            </h1>
            <p
              className="outline-0"
              contentEditable="true"
              spellCheck="false"
              suppressContentEditableWarning="true"
            >
              Chưa có mô tả
            </p>
          </div>
          <div className="w-1/5">
            <div className="flex justify-end items-center">
              <SaveButton />
              <button
                className="border-2 duration-200 ease inline-flex items-center mb-1 mr-1 transition py-1 px-2 text-sm rounded text-white border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=&amp;title=&amp;summary=&amp;source="
                aria-label="Share on Linkedin"
              >
                <i className="fa-solid fa-share"></i>
                <span className="ml-2">Chia sẻ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Flow />
    </>
  );
}

export default MindMap;
