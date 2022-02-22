import Header from "./components/Header"
import Tasks from "./components/Tasks"
import{useState} from "react"
import AddTask from "./components/AddTask"

function App() {
  const [tasks,setTasks] = useState([{
    id:1,
    text:"Doctors Appointment",
    day:"feb 5th",
    reminder:true
  },
  {
    id:2,
    text:"meeting at school",
    day:"march 10th",
    reminder:true
  }])
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !== id))
  }
  const toggleReminder = (id) =>{
    setTasks(
      tasks.map((task)=>
    task.id === id ? {...task,reminder:
      !task.reminder}:task))
    console.log(tasks)
  }
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      {tasks.length>0?(
      <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
      ):("Add more task")}
    </div>
  );
}

export default App;
