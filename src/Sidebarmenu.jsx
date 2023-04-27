import { useGlobalContext } from "./Context";
import DynamicForm from "./Content";

const Sidebarmenu = ({ uniqueStream }) => {
  const { isSidebarOpen, closeSidebar, setCurrentItem, currentItem } =
    useGlobalContext();
  const handlePage = (items) => {
    closeSidebar();
    setCurrentItem(items);
  };
  return (
    <div className="sidebar-links">
      {uniqueStream.map((items, i) => {
        return (
          <button
            className="btn-sidebar"
            key={items}
            onClick={() => handlePage(items)}
          >
            {items}
          </button>
        );
      })}
    </div>
  );
};
export default Sidebarmenu;
