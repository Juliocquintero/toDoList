import { ToDoProvider } from "../../hoc/toDoContext";
import "../../styles/App.css";
import Date from "../components/Date";
import FormComponent from "../components/Form";
import ToDoList from "../components/TaskList";
import React from "react";
const { screen } = window;
const App = () => {
  // React.useEffect(() => {
  //   screen.orientation
  //     .lock("landscape")
  //     .then(() => {
  //       alert("Success");
  //     })
  //     .catch((error) => {
  //       alert("Error");
  //     });
  //   return () => {};
  // }, []);

  const getOrientation = () => window.screen.orientation.type;
  const lockOrientation = () => {
    screen.orientation
      .lock("landscape")
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [orientation, setOrientation] = React.useState(getOrientation());

  const updateOrientation = (event) => {
    lockOrientation();
    setOrientation(getOrientation());
  };

  React.useEffect(() => {
    window.addEventListener("orientationchange", updateOrientation);
    return () => {
      window.removeEventListener("orientationchange", updateOrientation);
    };
  }, []);

  return (
    <div className="App">
      <h1> To Do List {orientation} </h1>
      <Date />
      <ToDoProvider>
        <FormComponent />
        <ToDoList />
      </ToDoProvider>
    </div>
  );
};

export default App;
