import Navbar from "./Navbar";
import DynamicForm from "./Content";
import { useEffect, useState } from "react";
import { data } from "./data";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./Context";
import Sidebarmenu from "./Sidebarmenu";

function App() {
  const [streamContent, setStreamContent] = useState([]);

  const { currentItem, setCurrentItem } = useGlobalContext();

  useEffect(() => {
    setStreamContent(data);
  }, []);
  return (
    <main>
      <Navbar />
      <Sidebar streamContent={streamContent} />
    </main>
  );
}

export default App;
