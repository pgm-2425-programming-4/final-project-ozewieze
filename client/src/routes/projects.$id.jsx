import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components/Header';

import { TaskBoard } from '../components/TaskBoard';

export const Route = createFileRoute('/projects/$id')({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  console.log(id);

  return (
    <>
      <Header projectId={id} />
      <TaskBoard projectId={id} />
    </>
  );
}
