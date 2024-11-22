import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"]

const sales_channel_data = [
    { name: "Website", value: 45600 },
    { name: "Mobile App", value: 38200 },
    { name: "Marketplace", value: 29800 },
    { name: "Social Media", value: 18700 },
]

const SalesChannelChart = () => {
    return (
        <motion.div
          className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg lg:col-span-2 rounded-xl p-6 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Channel</h2>
          <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart data={sales_channel_data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey={"name"} stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgbb(31, 41, 55, 0.8)",
                    border: "1px solid #4B5563",
                  }}
                  itemStyle={{ color: "#E5E7EB" }}
                />
                <Bar dataKey={"value"} fill="#8884d8">
                    {sales_channel_data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      );
}
export default SalesChannelChart