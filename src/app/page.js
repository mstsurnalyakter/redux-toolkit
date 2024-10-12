import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";


export default function Home() {
  return (
   <main className="p-40 space-y-10">
      <AddUsers/>

      <div className="border-b-2 border-gray-400"></div>
      <DisplayUsers/>
   </main>
  );
}
