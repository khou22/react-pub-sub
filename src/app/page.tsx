import { CounterDisplay } from "@/components/CounterDisplay/CounterDisplay";
import { IncrementButton } from "@/components/IncrementButton/IncrementButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 gap-12">
      <h1 className="text-4xl font-bold">Local Pub Sub System</h1>
      <p className="text-sm">This is a simple local pub sub system using PubSub.js implemented in a React setup with Next.js. This demonstrates how SSR works with PubSub.</p>
      <CounterDisplay />
      <IncrementButton />
    </main>
  );
}
