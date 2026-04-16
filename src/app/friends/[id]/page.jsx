'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { MdAddIcCall } from "react-icons/md";
import { BsArchive, BsChatText } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";

const FriendDetailPage = () => {

  const { id } = useParams()
  const [friend, setFriend] = useState(null)
  const [timeline, setTimeline] = useState([]) // ✅ NEW

  // ✅ fetch friend
  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        const f = data.find(item => String(item.id) === String(id))
        setFriend(f)
      })
  }, [id])

  // ✅ load timeline from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || []
    setTimeline(stored)
  }, [])

  if (!friend) return <p>Loading...</p>

  // ✅ handle action
  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toDateString()
    }

    const oldData = JSON.parse(localStorage.getItem("timeline")) || []
    const updated = [newEntry, ...oldData]

    localStorage.setItem("timeline", JSON.stringify(updated))
    setTimeline(updated) // ✅ instant update

  }


    const handleDelete = (id) => {
    const updated = timeline.filter(item => item.id !== id)

    localStorage.setItem("timeline", JSON.stringify(updated))
    setTimeline(updated)
}


  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-1 space-y-4">

          <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">
            <Image
              className="w-20 h-20 mx-auto rounded-full"
              src={friend.picture}
              alt="image"
              width={100}
              height={100}
            />

            <h2 className="text-xl font-semibold">{friend.name}</h2>

            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
              {friend.status}
            </span>

            <div className="flex justify-center gap-2 flex-wrap mt-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="bg-green-100 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 italic">{friend.bio}</p>
            <p className="text-sm text-gray-400">{friend.email}</p>
          </div>

          <div className="space-y-2">
            <button className="w-full border p-2 rounded flex justify-center items-center gap-1">
              <RiNotificationSnoozeLine /> Snooze 2 Weeks
            </button>
            <button className="w-full border p-2 rounded flex justify-center items-center gap-1">
              <BsArchive /> Archive
            </button>
            <button className="w-full border p-2 rounded text-red-500 flex justify-center items-center gap-1">
              <RiDeleteBin6Line /> Delete
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-4">

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-2xl font-bold">{friend.days_since_contact}</h2>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-2xl font-bold">{friend.goal}</h2>
              <p className="text-sm text-gray-500">Goal (days)</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-2xl font-bold">{friend.next_due_date}</h2>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* RELATIONSHIP GOAL */}
          <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-500">
                Connect every <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>
            <button className="border px-3 py-1 rounded">Edit</button>
          </div>

          {/* QUICK CHECK-IN */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-3 text-gray-600 font-semibold">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3">
              <button onClick={() => handleAction("Call")} className="border p-3 rounded">
                <MdAddIcCall className="mx-auto text-2xl" /> Call
              </button>

              <button onClick={() => handleAction("Text")} className="border p-3 rounded">
                <BsChatText className="mx-auto text-2xl" /> Text
              </button>

              <button onClick={() => handleAction("Video")} className="border p-3 rounded">
                <BiVideo className="mx-auto text-2xl" /> Video
              </button>
            </div>
          </div>

          {/* ✅ INTERACTION TIMELINE */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between">
              <h3 className="mb-3 font-semibold text-gray-600">
              Interaction Timeline
            </h3>
            <p className="text-gray-600"><small><FaClockRotateLeft className="inline-block mr-1" />Full History</small></p>
            </div>

            {timeline.length === 0 ? (
              <p className="text-sm text-gray-400">No interactions yet</p>
            ) : (
              <div className="space-y-3">
                {timeline.map((item) => (
                  <div
                    key={item.id}
                    className="border p-3 rounded flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetailPage;