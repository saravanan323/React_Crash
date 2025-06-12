// Home.jsx - Add navigation to other buttons
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        <button
          className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer rounded-3xl bg-[#4E71FF] hover:bg-[#8DD8FF] focus:outline-4 focus:outline-offset-2 focus:outline-[#4E71FF] active:bg-[#4E71FF]"
          onClick={() => navigate("/todo")}
        >
          To Do
        </button>
        <button
          className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer rounded-3xl bg-[#4E71FF] hover:bg-[#8DD8FF] focus:outline-4 focus:outline-offset-2 focus:outline-[#4E71FF] active:bg-[#4E71FF]"
          // onClick={() => navigate("/app1")}
        >
          Application 1
        </button>
        <button
          className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer rounded-3xl bg-[#4E71FF] hover:bg-[#8DD8FF] focus:outline-4 focus:outline-offset-2 focus:outline-[#4E71FF] active:bg-[#4E71FF]"
          // onClick={() => navigate("/app2")}
        >
          Application 2
        </button>
        <button
          className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer rounded-3xl bg-[#4E71FF] hover:bg-[#8DD8FF] focus:outline-4 focus:outline-offset-2 focus:outline-[#4E71FF] active:bg-[#4E71FF]"
          // onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </button>
      </div>
    </>
  );
};

export default Home;
