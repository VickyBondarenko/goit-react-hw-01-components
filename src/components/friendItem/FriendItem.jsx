import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

const FriendItem = props => {
  return (
    <li className={css.item}>
      <span className={props.isOnline ? css.onLine : css.ofLine}></span>
      <img
        className={css.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{props.name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendItem;
