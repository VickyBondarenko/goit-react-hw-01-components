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

const Profile = ({ stats, avatar, username, tag, location }) => {
  const data = Object.entries(stats);

  return (
    <Wraper>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <StatsList>
        {data.map((item, index) => (
          <StatsItem key={index + item[0]} label={item[0]} quantity={item[1]} />
        ))}
      </StatsList>
    </Wraper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
