import RenderLayout from "./core/RenderLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <RenderLayout />
    </>
  );
}

export default App;
