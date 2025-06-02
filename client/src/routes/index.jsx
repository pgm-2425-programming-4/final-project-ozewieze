import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <main className="task-board">
      <div>
        <h3>To do</h3>
        <article className="card">
          <p>Create pipeline with Github Actions</p>
          <p className="tag">Infra</p>
        </article>
        <article className="card">
          <p>Some task for PGM3</p>
          <p className="tag">Documentation</p>
        </article>
      </div>
      <div>
        <h3>In progress</h3>
        <article className="card">
          <p>Set up Strapi on Render</p>
          <p className="tag">Infra</p>
          <p className="tag">Back-end</p>
        </article>
      </div>
      <div>
        <h3>Ready for review</h3>
        <article className="card">
          <p>Add formatting with Prettier</p>
          <p className="tag">Front-end</p>
        </article>
        <article className="card">
          <p>Add Linting with ESLint</p>
          <p className="tag">Front-end</p>
        </article>
      </div>
      <div>
        <h3>Done</h3>
        <article className="card">
          <p>Initialize Git repository on Github</p>
          <p className="tag">Infra</p>
        </article>
      </div>
    </main>
  );
}
