import { CounterDisplay } from "@/components/CounterDisplay/CounterDisplay";
import { IncrementButton } from "@/components/IncrementButton/IncrementButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 gap-12">
      <CounterDisplay />
      <IncrementButton />
    </main>
  );
}
