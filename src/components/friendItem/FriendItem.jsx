import './friendItemStyle.css';

const FriendItem = props => {
  return (
    <li className="item">
      <span
        className={props.isOnline ? 'onLine status' : 'ofLine status'}
      ></span>
      <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className="name">{props.name}</p>
    </li>
  );
};
export default FriendItem;
