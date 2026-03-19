import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";
import { toast } from "react-toastify";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

useEffect(() => {
  if (user) {
    navigate("/dashboard");
  }
}, [user]);

  const handleLogin = async () => {
    
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success("Login successful 🎉");
    } catch (error) {
      toast.error("Invalid email or password ❌");
      console.log(error)
    }
    setLoading(false);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600">

      {/* 🔥 Animated background blobs */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bottom-10 right-10"></div>
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-1/2 left-1/2"></div>

      {/* 💎 Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-80 text-white space-y-5 transform transition duration-500 hover:scale-105">

        {/* Logo */}
        <div className="text-center space-y-1 animate-fadeIn">
          <h1 className="text-2xl font-bold tracking-wide">
            🏥 HealthCare+
          </h1>
          <p className="text-sm text-white/80">
            Smart Patient Management System
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-white/30 placeholder-white text-white outline-none focus:ring-2 focus:ring-white transition"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-white/30 placeholder-white text-white outline-none focus:ring-2 focus:ring-white transition"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-white text-indigo-600 font-semibold py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-white/70">
          Secure login powered by Firebase 🔐
        </p>
      </div>
    </div>
  );
}