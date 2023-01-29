import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import UserProfile from './UserProfile/UserProfile';
import Statistics from './Statistics/Statistics';
import { FrendList } from './FriendList/FriendList';
export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FrendList friends={friends} />
    </div>
  );
};
