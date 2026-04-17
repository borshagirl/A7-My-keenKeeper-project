'use client'

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"

export default function StatsPage() {

  const [data, setData] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || []

    const call = stored.filter(i => i.type === "Call").length
    const text = stored.filter(i => i.type === "Text").length
    const video = stored.filter(i => i.type === "Video").length

    const chartData = [
      { name: "Call", value: call },
      { name: "Text", value: text },
      { name: "Video", value: video }
    ]

    setData(chartData)
  }, [])

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"]

  return (
    <div className="w-[80vw] mx-auto mt-5">
    <h2 className="mb-5 text-3xl font-bold">Friendship Analytics</h2>
    <div className="p-2 space-y-2 shadow-lg">

      <h1 className="text-gray-600 font-semibold">By Interaction Type</h1>

      {data.every(d => d.value === 0) ? (
        <p className="text-center text-gray-400">
          No data available
        </p>
      ) : (
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={90}
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />

          </PieChart>
        </div>
      )}

    </div>
    </div>
  )
}