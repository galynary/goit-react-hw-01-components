import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendItem/FriendItem';
import { AllFriendList } from './FriendList.styled';
export function FriendList({ friends }) {
  return (
    <AllFriendList>
      {friends.map(item => (
        <friends
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </AllFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
