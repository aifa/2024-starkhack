import { useState } from 'react';

export default function AddUserStory({ projectId, onStoryAdded }) {
  const [userStory, setUserStory] = useState('');
  const [technicalComments, setTechnicalComments] = useState('');

  const handleAddStory = (event) => {
    event.preventDefault();
    // Logic to add story
    onStoryAdded();
  };

  return (
    <form onSubmit={handleAddStory}>
      <h1>Add User Story</h1>
      <textarea 
        name="userStory" 
        placeholder="User Story"
        value={userStory}
        onChange={(e) => setUserStory(e.target.value)}
        required
      ></textarea>
      <textarea 
        name="technicalComments" 
        placeholder="Technical Comments"
        value={technicalComments}
        onChange={(e) => setTechnicalComments(e.target.value)}
      ></textarea>
      <button type="submit">Add</button>
    </form>
  );
}
