import { createContext, useEffect, useState } from 'react';
const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  let initialState = [
    {
      id: 1633558451935,
      description: 'Created with React',
      createdAt: '2021-10-06T00:39:51.019Z',
    },
    { id: 1633558549191, description: 'DEMO MODE', createdAt: '2021-10-07T00:39:51.019Z' },
  ];
  const dataStoradge = JSON.parse(localStorage.getItem('Data'));
  const [toDoList, setToDoList] = useState(dataStoradge || initialState);
  const updateStoradge = (dataToStoradge) => {
    localStorage.setItem('Data', dataToStoradge);
  };
  useEffect(() => {
    let dataToStoradge = JSON.stringify(toDoList);
    if (!dataStoradge) {
      updateStoradge(dataToStoradge);
    }
  }, [toDoList, dataStoradge]);

  const addNewToDo = (data) => {
    let newData = toDoList.concat(data);
    let dataToStoradge = JSON.stringify(newData);
    setToDoList(newData);
    updateStoradge(dataToStoradge);
  };

  const removeToDo = (id) => {
    let newData = toDoList.filter((el) => el.id !== id);
    let dataToStoradge = JSON.stringify(newData);
    let confirm = window.confirm(`Are you sure to delete the task with id ${id}?`);
    if (confirm) {
      setToDoList(newData);
      updateStoradge(dataToStoradge);
    }
  };

  const data = { toDoList, addNewToDo, removeToDo };
  return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>;
};
export { ToDoProvider };
export default ToDoContext;
