import Profile from "./profile";
import FriendsList from "@/app/components/Friends";

export default function Home({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Profile id={params.id}/>
        </div>
        <div>
          <FriendsList/>
        </div>
      </main>
    </div>
  );
}
