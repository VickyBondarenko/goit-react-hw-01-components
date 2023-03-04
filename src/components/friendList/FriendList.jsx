import FriendItem from 'components/friendItem/FriendItem';

const FriendList = props => {
  const data = props.friends;
  return (
    <ul className="friend-list">
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
export default FriendList;
