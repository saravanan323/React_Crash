import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const showButton = location.pathname !== "/";

  return (
    <>
      <div>
        <div className="relative flex items-center justify-center bg-teal-400 p-4 rounded-lg shadow-md">
          {showButton && (
            <button
              className="absolute left-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center cursor-pointer rounded-[5px] bg-[#4300FF] hover:bg-blue-400 active:bg-blue-500"
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Go Home
            </button>
          )}
          <h1 className="text-black font-bold text-lg">APP GALLERY</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
