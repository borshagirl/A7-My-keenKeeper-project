
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({friends}) => {
    // console.log(friends)
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {friends.map(friend => <Link href={`/friends/${friend.id}`} key={friend.id}>
                    
                <div className="card bg-base-100 shadow-sm">
                  <figure className="px-10 pt-10">
                    <Image
                    src={friend.picture}
                    alt="FriendsImg"
                    width={100}
                    height={100}
                    ></Image>
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{friend.name}</h2>
                    <p className="text-gray-600"><small>{friend.days_since_contact}d ago</small></p>
                    <div className="flex gap-2">
                        {friend.tags.map((tag, indx) => <p key={indx} className="bg-green-200 px-3 rounded-full">
                            {tag}
                        </p>)}
                    </div>
                    <p className={`px-2 py-1 rounded-full ${friend.status === 'overdue' && 'bg-[#ef4444] text-white'} ${friend.status === 'on track' && 'bg-[#244d3f] text-white'} ${friend.status === 'due soon' && 'bg-[#efad44] text-white'}`}>{friend.status}</p>
                  </div>
                </div>

                </Link>)}
            </div>
        </div>
    );
};

export default FriendCard;