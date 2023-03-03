import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import user from '../json/user.json';
import data from '../json/data.json';
<json />;

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
