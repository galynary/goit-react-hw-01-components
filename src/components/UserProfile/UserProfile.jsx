import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import css from './UserProfile.module.css';
import {
  Card,
  Description,
  Stats,
  Avatar,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
} from './UserProfile.stated';

export default function UserProfile({
  username,
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{Stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{Stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{Stats.likes}</Quantity>
        </li>
      </Stats>
    </Card>
  );
}

UserProfile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
