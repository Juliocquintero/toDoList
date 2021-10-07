import moment from 'moment';
import { Description, Li, TimeAgo } from './styles';

const ListItem = ({ data, removeToDo }) => {
  const { createdAt } = data;
  const timeFrom = moment(createdAt).fromNow();
  return (
    <Li onClick={() => removeToDo(data.id)}>
      <Description> {data?.description}</Description>
      <TimeAgo>• {timeFrom}</TimeAgo>
    </Li>
  );
};

export default ListItem;
