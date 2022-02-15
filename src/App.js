import Header from "./components/Header"
import Tasks from "./components/Tasks"
import{useState} from "react"
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
  
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
