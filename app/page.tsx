// import Header from "@/components/header";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex flex-col text-white">
//       <Header />
//       <Link href="/new-game">Submit a new game</Link>
//       <Link href="/your-stats">Your stats</Link>
//     </main>
//   );
// }

import AllStats from "@/components/all-stats"
import Header from "@/components/header"

const YourStatsPage = () => {
  return (
    <>
      <Header />
      <AllStats />
    </>
  )
}

export default YourStatsPage;
