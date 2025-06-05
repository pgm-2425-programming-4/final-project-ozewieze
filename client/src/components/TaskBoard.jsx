import {
  useFetchProjectRelatedTasks,
  useFetchAllStatuses,
} from '../queries/fetchProjectRelatedTasks';

export function TaskBoard({ projectId }) {
  const {
    data: projectData,
    isPending: projectIsPending,
    error: projectError,
  } = useFetchProjectRelatedTasks(projectId);
  const {
    data: statusesData,
    isPending: statusesIsPending,
    error: statusesError,
  } = useFetchAllStatuses();

  if (projectIsPending || statusesIsPending) {
    return (
      <main class="task-board">
        <p>Loading projects...</p>
      </main>
    );
  }
  if (projectError || statusesError) {
    return <p>Error loading projects</p>;
  }
  if (projectData || statusesData) {
    console.log('projectData returned:', projectData.data);
    console.log('statusesData returned: ', statusesData.data);
    return (
      <main class="task-board">
        {statusesData.data.map(status => {
          if (status.name !== 'Backlog') {
            return (
              <div>
                {' '}
                <h3>{status.name}</h3>
                <article class="card">
                  <p>Create pipeline with Github Actions</p>
                  <p class="tag">Infra</p>
                </article>
              </div>
            );
          }
        })}

        {/* <h3>To do</h3>
          <article class="card">
            <p>Create pipeline with Github Actions</p>
            <p class="tag">Infra</p>
          </article>
          <article class="card">
            <p>Some task for PGM3</p>
            <p class="tag">Documentation</p>
          </article>
        </div>
        <div>
          <h3>In progress</h3>
          <article class="card">
            <p>Set up Strapi on Render</p>
            <p class="tag">Infra</p>
            <p class="tag">Back-end</p>
          </article>
        </div>
        <div>
          <h3>Ready for review</h3>
          <article class="card">
            <p>Add formatting with Prettier</p>
            <p class="tag">Front-end</p>
          </article>
          <article class="card">
            <p>Add Linting with ESLint</p>
            <p class="tag">Front-end</p>
          </article>
        </div>
        <div>
          <h3>Done</h3>
          <article class="card">
            <p>Initialize Git repository on Github</p>
            <p class="tag">Infra</p>
          </article> */}
        {/* </div> */}
      </main>
    );
  }
}
