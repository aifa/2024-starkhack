import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold">My Project</h1>
      <DynamicWidget />
    </header>
  );
}
