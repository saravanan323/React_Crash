import { useLocation } from "react-router";

const ToDoHome = () => {
  const location = useLocation();
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ];
  console.log(location);
  return (
    <div className="flex justify-center place-content-center h-96 w-full">
      <ul className="list-[circle]">
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
        <li>Need to buy vegitables</li>
      </ul>
    </div>
  );
};

export default ToDoHome;
