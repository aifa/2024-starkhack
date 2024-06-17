import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
export default function ProjectOverview({ projectId, onAddStory }) {
  // Fetch project details using projectId if necessary

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="mb-4 text-2xl font-bold">Project Overview</h1>
      <div className="">
        <Label>Type</Label>
        <Input value="React" disabled={true} />
      </div>
      <div className="">
        <Label>Repository</Label>
        <div className="flex flex-row space-x-2">
          <Input type="text" placeholder="https://github.com/username/repo" />
          <Button type="submit">Copy</Button>
        </div>
      </div>
      <div className="">
        <Label>
          User Stories
      </Label>
      <ul>
        <li className="text-sm">User Story 1</li>
        <li className="text-sm">User Story 2</li>
        </ul>
      </div>
      <Button onClick={onAddStory}>Add User Story</Button>
    </div>
  );
}
