import List from "@/components/list";
import DealAdd from "@/components/dealAdd";
import Profile from "@/components/Profile";
import FriendsList from "@/components/friends";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Profile/>
          <List/>
          <DealAdd/>
        </div>
        <div>
          <FriendsList/>
        </div>
      </main>
    </div>
  );
}
