import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components/Header';

import { TaskBoard } from '../components/TaskBoard';
import { useState } from 'react';

export const Route = createFileRoute('/projects/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const [selectedLabelFilter, setSelectedLabelFilter] = useState('all');
  console.log('selectedLabelFilter:', selectedLabelFilter);

  return (
    <>
      <Header
        projectId={id}
        selectedLabelFilter={selectedLabelFilter}
        setSelectedLabelFilter={setSelectedLabelFilter}
      />
      <TaskBoard
        projectId={id}
        selectedLabelFilter={selectedLabelFilter}
        setSelectedLabelFilter={setSelectedLabelFilter}
      />
    </>
  );
}
