import { motion } from "framer-motion";
import { useEffect } from "react";


export default function Dashboard() {
 

  const requestNotificationPermission = async () => {
        console.log("BUTTON CLICKED 🔥"); 
    const permission = await Notification.requestPermission();
   
    if (permission === "granted") {
      showNotification();
    }
  };

  const showNotification = () => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("🏥 Healthcare Alert", {
        body: "New patient has been added!",
        icon: "/vite.svg",
      });
    });
  };
 
  
  return (
    <div className="w-full space-y-6">
       <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={requestNotificationPermission}>
        Trigger Notification 🔔
        </button>

      {/* 🔥 Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/60 backdrop-blur-lg 
        border border-white/40 
        p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Welcome 👋
        </h2>
        <p className="text-gray-600">
          Your healthcare dashboard is ready. Track patients, analytics, and system insights here.
        </p>
      </motion.div>

      {/* 🔥 Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-indigo-500 to-blue-500 
          text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-semibold">Total Patients</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 
          text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p className="text-3xl font-bold mt-2">45</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-pink-500 to-red-500 
          text-white p-6 rounded-2xl shadow-lg"
        >
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl font-bold mt-2">₹25,000</p>
        </motion.div>

      </div>

      {/* 🔥 Activity Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white/60 backdrop-blur-lg 
        border border-white/40 
        p-6 rounded-2xl shadow-md"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3 text-gray-600">
          <li>✔ Patient John Doe checked in</li>
          <li>✔ New appointment scheduled</li>
          <li>✔ Payment received from client</li>
        </ul>
       
      </motion.div>

    </div>
  );
}