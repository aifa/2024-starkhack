import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function AddUserStory({ projectId, onStoryAdded }) {
  const [userStory, setUserStory] = useState('');
  const [technicalComments, setTechnicalComments] = useState('');

  const handleAddStory = (event) => {
    event.preventDefault();
    // Logic to add story
    onStoryAdded();
  };

  return (
    <form onSubmit={handleAddStory} className='space-y-4'>
      <h1 className="mb-4 text-2xl font-bold">Add User Story</h1>
      <Textarea 
        name="userStory" 
        placeholder="User Story"
        value={userStory}
        onChange={(e) => setUserStory(e.target.value)}
        required
      />
      <Textarea 
        name="technicalComments" 
        placeholder="Technical Comments"
        value={technicalComments}
        onChange={(e) => setTechnicalComments(e.target.value)}
      />
      <Button type="submit" variant="outline">Add</Button>
    </form>
  );
}
