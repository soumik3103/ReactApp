import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Mar 25th at 3 pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Mar 26th at 4 pm',
        reminder: true
    },
    {
      id: 3,
      text: 'Meeting with my girlfriend',
      day: 'Mar 26th at 5 pm',
      reminder: true
  },
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  //console.log('You have toggled')
  setTasks(tasks.map((task) =>  task.id === id ? { ...task, reminder : !task.reminder }: task))
}

  return (
    <div className="container">
     <Header text = 'Add'/>
     {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
}

export default App;
