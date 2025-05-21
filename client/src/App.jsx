import { useEffect, useState } from 'react';
import { API_TOKEN } from './constants/constants';
import { Backlog } from './components/Backlog/Backlog';
import './App.css';
import './reset.css';
import './variables.css';

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    //your-strapi-app.onrender.com/api/tasks?populate=* has been blocked by CORS policy

    fetch('http://localhost:1337/api/tasks?populate=*', {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
      .then(data => data.json())
      .then(jsondata => {
        console.log(jsondata.data);
        setTasks(jsondata.data);
      });
  }, []);
  return <Backlog tasks={tasks} />;
}

export default App;
