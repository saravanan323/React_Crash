const Home = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <button className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer bg-blue-400 rounded-3xl bg-violet-500 hover:bg-violet-600 focus:outline-4 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
          To Do
        </button>
        <button className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer bg-blue-400 rounded-3xl bg-violet-500 hover:bg-violet-600 focus:outline-4 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
          Applicatin 1
        </button>
        <button className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer bg-blue-400 rounded-3xl bg-violet-500 hover:bg-violet-600 focus:outline-4 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
          Application 2
        </button>
        <button className="border-4 border-white p-20 m-10 flex justify-center cursor-pointer bg-blue-400 rounded-3xl bg-violet-500 hover:bg-violet-600 focus:outline-4 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
          Portfolio
        </button>
      </div>
    </>
  );
};

export default Home;
