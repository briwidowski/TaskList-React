// Root component file. Components can be functions or classes
import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Attend Abby's Recital",
        day: 'May 24th',
        reminder: true
    },
    {
        id: 2,
        text: 'Clean porch',
        day: 'May 25th',
        reminder: false
    },
    {
        id: 3,
        text: 'Bathe the dogs',
        day: 'May 25th',
        reminder: true
    },
    {
        id: 4,
        text: 'Renew membership',
        day: 'May 27th',
        reminder: true
    }
  ])

  // Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder on or off
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder:
         !task.reminder} : task
      )
    )
  } 

  return (
    <div className="container"> 
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
        title='Task List' />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* Checks if there's any tasks to show or displays message */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> :
      'No more tasks!'}
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Import react and use this class</h1>
//   }
// }

export default App;
