import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action="" className="flex flex-col gap-8 items-end">          
          <div className="flex gap-8">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className="flex gap-8">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className="flex gap-8">
            <label htmlFor="password1">Password</label>
            <input type="password" name="password1" className="text-black"/>
          </div>

          <div className="flex gap-8">
            <label htmlFor="password2">Password repeat</label>
            <input type="password" name="password2" className="text-black"/>
          </div>
        </form>
      </main>
    </div>
  );
}