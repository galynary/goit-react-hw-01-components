import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import UserProfile from './UserProfile/UserProfile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
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
      <FriendList>
        <FriendList friends={friends} />
      </FriendList>
    </div>
  );
};
