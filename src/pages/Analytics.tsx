import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const monthlyData = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 45 },
  { name: "Mar", patients: 60 },
  { name: "Apr", patients: 50 },
  { name: "May", patients: 70 },
];

const revenueData = [
  { name: "Jan", revenue: 10000 },
  { name: "Feb", revenue: 20000 },
  { name: "Mar", revenue: 15000 },
  { name: "Apr", revenue: 30000 },
];

const pieData = [
  { name: "Flu", value: 40 },
  { name: "Diabetes", value: 25 },
  { name: "Heart", value: 20 },
  { name: "Other", value: 15 },
];

const COLORS = ["#6366F1", "#22C55E", "#F59E0B", "#EF4444"];

export default function Analytics() {
  return (
    <div className="space-y-6">

      {/* 🔥 Header */}
      <h2 className="text-2xl font-bold text-gray-700">
        Analytics Dashboard 📊
      </h2>

      {/* 🔥 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl text-white shadow-lg
          bg-gradient-to-r from-indigo-500 to-blue-500"
        >
          <h3>Total Patients</h3>
          <p className="text-3xl font-bold mt-2">320</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl text-white shadow-lg
          bg-gradient-to-r from-green-500 to-emerald-500"
        >
          <h3>Revenue</h3>
          <p className="text-3xl font-bold mt-2">₹80,000</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-2xl text-white shadow-lg
          bg-gradient-to-r from-pink-500 to-red-500"
        >
          <h3>Appointments</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </motion.div>

      </div>

      {/* 🔥 Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="mb-4 font-semibold text-gray-600">
            Patient Growth
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="patients" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h3 className="mb-4 font-semibold text-gray-600">
            Revenue Trend
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={revenueData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* 🔥 Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="mb-4 font-semibold text-gray-600">
          Disease Distribution
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}
