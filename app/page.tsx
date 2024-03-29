import CountingStats from "@/components/counting-stats";
import TripleSlash from "@/components/triple-slash";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TripleSlash />
      <CountingStats />
      <Link href="/new-game">Submit a new game</Link>
    </main>
  );
}
