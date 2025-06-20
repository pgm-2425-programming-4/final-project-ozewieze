import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div class="intro">
      <h2>Kanban Board</h2>
      <p>
        Dit is mijn eindproject voor het vak PGM4 in het laatste kwartaal van
        het eerste jaar programmeren aan de Artevelde hogeschool.Het is een
        webapplicatie ontwikkeld voor projectbeheer, waarbij de
        kernfunctionaliteit draait rond het beheren van taken binnen
        verschillende projecten.
      </p>
      <p>
        De applicatie bevat routes voor een taakbord en backlog per project
        (/projects/:id en /projects/:id/backlog). Op de homepagina is er een
        navigatiebalk met een overzicht van alle projecten. Binnen elk project
        kunnen taken worden weergegeven per status (behalve backlog), gefilterd,
        bekeken in detail via een dialoogvenster, aangepast van status en
        aangevuld met nieuwe taken. Elke taak bevat een titel, beschrijving,
        labels en status (zoals Backlog, To do, In progress, Ready for review,
        Done).
      </p>
      <p>
        {' '}
        De backlogpagina toont een gepagineerde lijst van alle taken met status
        "Backlog" (10 per pagina), inclusief het totaal aantal. De backend wordt
        aangestuurd via een REST API gebouwd met Strapi.
      </p>
    </div>
  );
}
