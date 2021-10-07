import { useContext } from 'react';
import ToDoContext from '../../../hoc/toDoContext';
import ListItem from './ListItem';
import { List, OrderButton, ToDoWrapper } from './styles';

const ToDoList = () => {
  const { toDoList, removeToDo } = useContext(ToDoContext);
  return (
    <ToDoWrapper>
      <OrderButton title="Order List">↑↓</OrderButton>
      <List>
        {toDoList.map((el, i) => (
          <ListItem key={`${el.id}${i}`} data={el} removeToDo={removeToDo}></ListItem>
        ))}
      </List>
    </ToDoWrapper>
  );
};

export default ToDoList;
