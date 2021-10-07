import moment from 'moment';
import { useContext } from 'react';
import ToDoContext from '../../../hoc/toDoContext';
import { AddInput, Button, Form } from './styles';

const FormComponent = () => {
  const { addNewToDo } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    let dataToAdd = {
      id: Date.now(),
      description: e.target.description.value,
      createdAt: moment().toISOString(),
    };
    e.preventDefault();
    addNewToDo(dataToAdd);
    e.target.description.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AddInput type="text" placeholder="Enter the task to add..." name="description" required />
      <Button type="submit" value="Add task" />
    </Form>
  );
};

export default FormComponent;
