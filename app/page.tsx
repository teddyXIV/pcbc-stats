import CountingStats from "@/components/counting-stats";
import TripleSlash from "@/components/triple-slash";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <TripleSlash />
      <CountingStats />
    </main>
  );
}
