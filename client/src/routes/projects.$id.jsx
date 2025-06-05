import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

import { TaskBoard } from "../components/TaskBoard";

export const Route = createFileRoute("/projects/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <>
      <Header />
      <TaskBoard projectId={id} />
      <div>Hello "/projects {id}"!</div>;
    </>
  );
}
