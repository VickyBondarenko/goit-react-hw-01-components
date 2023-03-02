import StatsItem from 'components/statsItem/StatsItem';
import {
  Wraper,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
} from './profileStyles';
import PropTypes from 'prop-types';

const Profile = props => {
  const stats = Object.keys(props.stats);
  const values = Object.values(props.stats);

  return (
    <Wraper>
      <div>
        <Avatar src={props.avatar} alt="User avatar" />
        <Name>{props.username}</Name>
        <Tag>@{props.tag}</Tag>
        <Location>{props.location}</Location>
      </div>

      <StatsList>
        <StatsItem label={stats[0]} quantity={values[0]} />
        <StatsItem label={stats[1]} quantity={values[1]} />
        <StatsItem label={stats[2]} quantity={values[2]} />
      </StatsList>
    </Wraper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
