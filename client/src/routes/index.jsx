import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div class="intro">
      <h2>Kanban Board</h2>
      <p style={{ margin: '1rem' }}>
        Hallo, dit is mijn eindproject voor het vak PGM4 in het laatste kwartaal
        van het eerste jaar programmeren aan de Artevelde hogeschool.
      </p>
    </div>
  );
}
