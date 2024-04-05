import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col text-white">
      <Link href="/new-game">Submit a new game</Link>
      <Link href="/your-stats">Your stats</Link>
    </main>
  );
}
