import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Dr Appointment",
      day: "Feb 5th at 2:30 p.m.",
      reminder: true,
    },
    {
      id: 2,
      text: "orgy",
      day: "Feb 5th at 3:00 p.m.",
      reminder: true,
    },
    {
      id: 3,
      text: "poop",
      day: "Feb 5th at 3:30 p.m.",
      reminder: true,
    },
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
