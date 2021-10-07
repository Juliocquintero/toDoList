import { useState } from 'react';
import { useContext } from 'react';
import ToDoContext from '../../../hoc/toDoContext';
import ListItem from './ListItem';
import { List, OrderButton, ToDoWrapper } from './styles';

const ToDoList = () => {
  const { toDoList, removeToDo } = useContext(ToDoContext);
  const [ordered, setOrdered] = useState(true);

  const order = (a, b) => {
    if (ordered) {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  };

  return (
    <ToDoWrapper>
      <OrderButton title="Order List" onClick={() => setOrdered(!ordered)}>
        ↑↓
      </OrderButton>
      <List>
        {toDoList.sort(order).map((el, i) => (
          <ListItem key={`${el.id}${i}`} data={el} removeToDo={removeToDo}></ListItem>
        ))}
      </List>
    </ToDoWrapper>
  );
};

export default ToDoList;
