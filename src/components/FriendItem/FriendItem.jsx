import { Item, Status, AvatorPic, Name } from './FriendItem.styled';

export function Friend(props) {
  console.log(props);
  const { avatar, name, isOnline } = props;
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <AvatorPic src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
