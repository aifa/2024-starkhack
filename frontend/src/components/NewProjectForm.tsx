import { useState } from 'react';
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';

export default function NewProjectForm({ onProjectCreated }) {
  const [name, setName] = useState('');
  const [type, setType] = useState('react');

  const handleCreateProject = (event) => {
    event.preventDefault();
    // Logic to create project
    const projectId = 'new-project-id'; // Replace with actual project creation logic
    onProjectCreated(projectId);
  };

  return (
    <form onSubmit={handleCreateProject} className="space-y-4">
      <h1 className="mb-4 text-2xl font-bold">New Project</h1>
      <Input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
        className="mb-4"
      />
      <Select name="type" value={type} onValueChange={(value) => setType(value)} className="mb-4">
        <SelectTrigger className="">
          <SelectValue placeholder="Select project type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="next">Next</SelectItem>
          <SelectItem value="react-native">React Native</SelectItem>
          <SelectItem value="flutter">Flutter</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" variant="outline" className="mt-4">Create</Button>
    </form>
  );
}
