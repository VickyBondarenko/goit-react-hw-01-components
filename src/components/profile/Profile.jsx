import StatsItem from 'components/statsItem/StatsItem';
import styled from 'styled-components';

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

export default Profile;

const Wraper = styled.div`
  width: 400px;
  display: block;
  margin: 0 auto;
  border: 2px solid #9e9a9a;
  border-radius: 8px;
`;

const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  padding: 20px;
  width: 100px;

  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
const Tag = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-size: 24px;
  color: #9e9a9a;
  text-align: center;
`;
const Location = styled.p`
  margin: 0;
  padding-bottom: 30px;
  font-size: 24px;
  color: #9e9a9a;
  text-align: center;
`;

const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #d6d0d084;
  border-top: 2px solid grey;
`;
