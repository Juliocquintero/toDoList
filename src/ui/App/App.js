import { ToDoProvider } from "../../hoc/toDoContext";
import "../../styles/App.css";
import Date from "../components/Date";
import FormComponent from "../components/Form";
import ToDoList from "../components/TaskList";
const { screen } = window;
const App = () => {
  screen.orientation
    .lock("landscape")
    .then(() => {
      alert("Hola");
    })
    .catch((error) => {
    });
  return (
    <div className="App">
      <h1> To Do List </h1>
      <Date />
      <ToDoProvider>
        <FormComponent />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
};

export default App;
