import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MindMap from "../../../components/mindmap/MindMap";
import { getSession } from "@auth0/nextjs-auth0";

// export const generateMetadata = () => {
//   return {
//     title: `Mindmap của tôi - Mind Map Flow`,
//   };
// };

async function page() {
  let user = await getSession();
  user = JSON.parse(JSON.stringify(user));
  // const email = user.user.email;
  // const data = await getMindMap(email);
  return (
    <main className="min-h-[100vh]">
      <MindMap session={user} />
      {/* data={data} */}
    </main>
  );
}

export default page;
