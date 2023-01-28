import PropTypes from 'prop-types';
// eslint-disable-line no-use-before-define
import FriendsList from './FriendsList.styled';
import FriendsItem from './FriendsItem/FriendsItem';
export default function FriendList({ friends }) {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendList>
  );
}

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
