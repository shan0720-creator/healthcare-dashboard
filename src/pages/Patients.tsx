import { useAppStore } from "../store/appStore";
import { motion } from "framer-motion";

export default function Patients() {
  const { patients, viewMode, toggleView } = useAppStore();

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-700">Patients</h2>

        <button
          onClick={toggleView}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-md"
        >
          {viewMode === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      {/* GRID VIEW */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patients.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="p-5 bg-white rounded-2xl shadow-md border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
              <p className="text-gray-500 mt-1">Age: {p.age}</p>
              <span className="inline-block mt-3 px-3 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-full">
                {p.condition}
              </span>
            </motion.div>
          ))}
        </div>
      ) : (
        /* LIST VIEW */
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {patients.map((p, i) => (
            <div
              key={p.id}
              className={`flex justify-between items-center p-4 ${
                i !== patients.length - 1 && "border-b"
              }`}
            >
              <div>
                <p className="font-semibold text-gray-700">{p.name}</p>
                <p className="text-sm text-gray-500">Age: {p.age}</p>
              </div>

              <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                {p.condition}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}