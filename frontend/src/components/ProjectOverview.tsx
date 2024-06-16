export default function ProjectOverview({ projectId, onAddStory }) {
    // Fetch project details using projectId if necessary
  
    return (
      <div>
        <h1>Project Overview</h1>
        <p>Type: React</p>
        <p>Repository: ...</p>
        <button onClick={onAddStory}>Add User Story</button>
      </div>
    );
  }
  