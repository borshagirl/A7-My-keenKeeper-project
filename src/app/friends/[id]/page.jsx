import Image from "next/image";

import { MdAddIcCall } from "react-icons/md";
import { BsArchive, BsChatText } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";


const FriendDetailPage = async ({ params }) => {
    // Handle both Promise and regular object
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    
    // console.log("params:", resolvedParams);
    // console.log("id:", id);
    
    if (!id) {
        return <div>No ID provided in URL</div>;
    }
    
    const res = await fetch('http://localhost:3001/friends.json', {
        cache: 'no-store',
    });
    
    const friends = await res.json();
    // console.log("All friends:", friends);
    
    const friend = friends.find(frd => String(frd.id) === String(id));
    
    if (!friend) {
        return (
            <div>
                <h3>Friend not found</h3>
                <p>Searching for ID: {id}</p>
                <p>Available IDs: {friends.map(f => f.id).join(', ')}</p>
            </div>
        );
    }
    
    return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
       <div className="lg:col-span-1 space-y-4">
         {/* Profile Card */}
         <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">
            <Image 
            className="w-20 h-20 mx-auto rounded-full"
            src={friend.picture}
            alt="image"
            width={100}
            height={100}
            >   
            </Image>

            <h2 className="text-xl font-semibold">{friend.name}</h2>

            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                {friend.status}
            </span>

        <div className="flex justify-center gap-2 flex-wrap mt-2">
    {friend.tags.map((tag, indx) => (
      <span key={indx} className="bg-green-100 px-2 py-1 rounded text-xs">
        {tag}
      </span>
    ))}
        </div>

        <p className="text-gray-500 italic">{friend.bio}</p>
        <p className="text-sm text-gray-400">{friend.email}</p>
        </div>
        <div className="space-y-2">
          <button className="w-full border p-2 rounded flex justify-center items-center gap-1"><RiNotificationSnoozeLine /> Snooze 2 Weeks</button>
          <button className="w-full border p-2 rounded flex justify-center items-center gap-1"><BsArchive /> Archive</button>
          <button className="w-full border p-2 rounded text-red-500 flex justify-center items-center gap-1"><RiDeleteBin6Line /> Delete</button>
        </div>
       </div>


    {/* RIGHT SIDE */}
    <div className="lg:col-span-2 space-y-4">
     {/* Stats + other cards */}

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

      <div className="bg-white p-4 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Relationship Goal</h3>
          <p className="text-gray-500">Connect every <span className="text-black font-bold">{friend.goal} days</span></p>
        </div>

        <button className="btn">Edit</button>
       </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="mb-3 text-gray-600 font-semibold">Quick Check-In</h3>
      
        <div className="grid grid-cols-3 gap-3">
          <button className="border p-3 rounded "><MdAddIcCall className="m-0 mx-auto text-2xl"/> Call</button>
          <button className="border p-3 rounded"><BsChatText className="m-0 mx-auto text-2xl" /> Text</button>
          <button className="border p-3 rounded"><BiVideo className="m-0 mx-auto text-2xl" /> Video</button>
        </div>
      </div>

    </div>

    </div>
   </div>
  );
};

export default FriendDetailPage;