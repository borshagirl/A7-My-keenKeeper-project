"use client"

import { useEffect, useState } from "react";
import { BiVideo } from "react-icons/bi";
import { BsChatText } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";



const TimelinePage = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || []
    setData(stored)
    }, [])

    const filteredData =
  filter === "All"
    ? data
    : data.filter(item => item.type === filter)



   return (
  <div className="w-[80vw] mx-auto space-y-4">

    <select className="btn btn-outline" onChange={(e) => setFilter(e.target.value)}>
      <option>All</option>
      <option>Call</option>
      <option>Text</option>
      <option>Video</option>
    </select>

    <div className="space-y-3">
   {filteredData.map(item => (
  <div
    key={item.id}
    className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
  >

    {/* LEFT */}
    <div className="flex items-center gap-4">

      {/* Icon */}
      <div className="text-2xl">
        {item.type === "Call" && <MdAddIcCall />}
        {item.type === "Text" && <BsChatText />}
        {item.type === "Video" && <BiVideo />}
      </div>

      {/* Text */}
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.type}</p>
      </div>
    </div>

    {/* RIGHT (Date) */}
    <p className="text-sm text-gray-400">
      {item.date}
    </p>

  </div>
))}
    </div>

  </div>
)
};

export default TimelinePage;