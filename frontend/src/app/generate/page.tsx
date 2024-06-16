"use client"
// pages/project.js
import { useState } from 'react';
import NewProjectForm from '../../components/NewProjectForm';
import ProjectOverview from '../../components/ProjectOverview';
import AddUserStory from '../../components/AddUserStory';

export default function ProjectPage() {
  const [step, setStep] = useState('new-project');
  const [projectId, setProjectId] = useState<string>('');

  const handleProjectCreated = (id: string) => {
    setProjectId(id);
    setStep('overview');
  };

  const handleAddStory = () => {
    setStep('add-story');
  };

  const renderStep = () => {
    switch (step) {
      case 'new-project':
        return <NewProjectForm onProjectCreated={handleProjectCreated} />;
      case 'overview':
        return <ProjectOverview projectId={projectId} onAddStory={handleAddStory} />;
      case 'add-story':
        return <AddUserStory projectId={projectId} onStoryAdded={() => setStep('overview')} />;
      default:
        return <NewProjectForm onProjectCreated={handleProjectCreated} />;
    }
  };

  return (
    <div className='container w-full'>
        <div className='flex justify-center items-center h-screen'>
            <div className='w-full max-w-md mt-6 px-6 py-4 bg-white rounded-md shadow-md overflow-hidden'>
                {renderStep()}
            </div>
        </div>
    </div>
  );
}
