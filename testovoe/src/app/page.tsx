import List from "@/components/list";
import DealAdd from "@/components/dealAdd";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <div className="border-b-2 text-2xl text-cyan-400">
            <h3>User: Anon</h3>
          </div>
          <List/>
          <DealAdd/>
        </div>
      </main>
    </div>
  );
}
