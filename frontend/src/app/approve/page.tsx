import { Button } from "@/components/ui/button";

export default function ApprovePage() {
    const userStories = [
        { id: 1, title: "User Story 1" },
        { id: 2, title: "User Story 2" },
        { id: 3, title: "User Story 3" },
    ];

    return (
        <div className="container w-full">
            <h1 className="text-2xl font-bold mb-4">Approve</h1>
            <ul className="space-y-4">
                {userStories.map((story) => (
                    <li key={story.id} className="flex justify-between items-center p-4 bg-white rounded-md shadow-md">
                        <span>{story.title}</span>
                        <Button>Approve</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}