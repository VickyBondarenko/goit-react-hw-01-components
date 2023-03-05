import FriendItem from 'components/friendItem/FriendItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = props => {
  const data = props.friends;
  return (
    <ul className={css.friendList}>
      {data.map(item => (
        <FriendItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default FriendList;
