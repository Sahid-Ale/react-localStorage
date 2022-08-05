import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { useState, useEffect } from 'react'
import { VisibilityControl } from './components/VisibilityControl';
function App() {
  const [tasksItems, setTasksItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  
  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  const CleanTask = () => {
    setTasksItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasksItems))
  }, [tasksItems])


  const creatNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = task => {
    const newTaskItems = tasksItems.map(t => (task.name === t.name) ? { ...t, done : !t.done } : t)
    setTasksItems(newTaskItems)
  }

  return (
    <div className="App bg-dark vh-100 text-white">
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4 mt-4'>
            <TaskCreator creatNewTask={creatNewTask} />
            <TaskTable doneValue = {false} tasks={tasksItems} toggleTask = {toggleTask}/>

            <VisibilityControl 
              isChecked = {showCompleted}
              setShowCompleted = {checked => setShowCompleted(checked)}
              CleanTask = {CleanTask}
            />
            {
              showCompleted ? <TaskTable doneValue = {showCompleted} tasks={tasksItems} toggleTask = {toggleTask}/> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
