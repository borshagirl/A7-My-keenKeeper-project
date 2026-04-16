import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import Stats from "@/components/Stats";


export default async function Home() {

    const res = await fetch('http://localhost:3000/friends.json')
    const friends = await res.json();
    // console.log(friends);

  return (
    <div className="w-[80vw] mx-auto">
      <Banner></Banner>
      <Stats></Stats>

      <div>
        <h2 className="my-5 text-2xl font-semibold">Your Friends</h2>
        <FriendCard friends={friends}></FriendCard>
      </div>
    </div>
  );
}
