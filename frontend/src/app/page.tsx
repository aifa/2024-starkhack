import { Button } from "@/components/ui/button";
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <a href="/contribute" className="text-2xl font-bold">
        <Button>Create New Project</Button>
      </a>
      <a href="/generate" className="text-2xl font-bold">
        <Button>Generate Project</Button>
      </a>
      <a href="/approve" className="text-2xl font-bold">
        <Button>Approve Project</Button>
      </a>
      <DynamicWidget/>
    </main>
  );
}
