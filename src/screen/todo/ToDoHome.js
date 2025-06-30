import { useState } from "react";
import { useLocation } from "react-router";

const ToDoHome = () => {
  const location = useLocation();
  const [todoItems, setTodoItems] = useState([
    { id: 1, description: "Buy vegetables", completed: false },
    {
      id: 2,
      description: "Finish SAPUI5 component refactor",
      completed: false,
    },
    {
      id: 3,
      description: "Test SQL procedure for document upload",
      completed: false,
    },
    {
      id: 4,
      description: "Check Genshin Impact daily commissions",
      completed: false,
    },
    { id: 5, description: "Explore new Korean recipe", completed: false },
  ]);

  console.log(location);

  const handleCheck = (id) => {
    setTodoItems((prev = []) =>
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
        <label
          className={e.completed ? "line-through text-gray-500" : "font-bold"}
        >
          {e.description}
        </label>
      </div>
    </li>
  ));

  return (
    <div className="flex justify-center items-center place-content-center min-h-full py-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mb-5 w-[300px]">
          <input
            className="border-b-2 border-teal-500 mr-4 w-[90%] focus:outline-none focus:border-b-2 focus:border-teal-500 active:border-b-2 active:border-teal-500"
            placeholder="Add new task"
          />
          <button className="left-4 bg-[#333446] text-white px-4 py-2 rounded-md flex items-center cursor-pointer hover:bg-[#EAEFEF] active:bg-[#333446]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <ul className="list-none space-y-2">{listItem}</ul>
      </div>
    </div>
  );
};

export default ToDoHome;
