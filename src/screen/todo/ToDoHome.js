import { useState } from "react";
import { useLocation } from "react-router";

const ToDoHome = () => {
  const location = useLocation();
  const [todoItems, setTodoItems] = useState([
    { id: 1, description: "Buy vegetables" },
    { id: 2, description: "Finish SAPUI5 component refactor" },
    { id: 3, description: "Test SQL procedure for document upload" },
    { id: 4, description: "Check Genshin Impact daily commissions" },
    { id: 5, description: "Explore new Korean recipe" },
  ]);

  console.log(location);

  const handleCheck = (id) => {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const listItem = todoItems.map((e) => (
    <li key={e.id}>
      <div className="flex flex-row items-center">
        <input
          type="checkbox"
          className="m-2 h-[20px] w-[30px] border-[3px] border-teal-500"
          checked={e.completed}
          onChange={() => handleCheck(e.id)}
        />
        <label className={e.completed ? "line-through text-gray-500" : "font-bold"}>
          {e.description}
        </label>
      </div>
    </li>
  ));

  return (
    <div className="flex justify-center items-start place-content-center min-h-full w-full py-4">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <input
            className="border-[3px] border-teal-500 w-[70%] mr-4 text-center focus:border-[3px] focus:border-teal-500 active:border-[3px] active:border-teal-500"
            placeholder="Enter description"
          />
          <button className="left-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center cursor-pointer bg-[#4300FF] hover:bg-blue-400 active:bg-blue-500">
            Add
          </button>
        </div>
        <ul className="list-none space-y-2">{listItem}</ul>
      </div>
    </div>
  );
};

export default ToDoHome;
