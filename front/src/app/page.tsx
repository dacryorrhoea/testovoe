import List from "@/app/components/List";
import Profile from "@/app/components/Profile";
import FriendsList from "@/app/components/Friends";
import UsersList from "@/app/components/Users";
import style from './style.module.css'

export default function Home() {
  return (
    <main className="flex h-svh">
      <div className="m-auto flex gap-10 w-auto">
        <div className={style.profileBlock}>
          <Profile />
          <List />
        </div>
        {/* <FriendsList /> */}
        <UsersList />
      </div>
    </main>
  );
}
