import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="/generate" className="text-2xl font-bold">
        <Button>Create New Project</Button>
      </a>
    </main>
  );
}
