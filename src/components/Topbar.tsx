import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="w-full bg-white/70 backdrop-blur-lg 
    border border-white/40 rounded-2xl shadow-md 
    px-6 py-4 flex justify-between items-center">

      {/* 🔥 Left Side */}
      <h1 className="text-xl font-bold text-gray-700 tracking-wide">
        Healthcare Dashboard 🏥
      </h1>

      {/* 🔥 Right Side */}
      <button
        onClick={handleLogout}
        className="px-5 py-2 rounded-xl text-white font-semibold
        bg-gradient-to-r from-red-500 to-pink-500
        shadow-md hover:shadow-lg
        transform hover:scale-105
        transition-all duration-300"
      >
        Logout 🚪
      </button>

    </div>
  );
}