
import { Item, Status, AvatorPic, Name } from "./Frend.styled";


export function Friend(props) {
	console.log(props);
	const { avatar, name, isOnline, type } = props;
	return (
		<Item>
			<Status type={type}>{isOnline}</Status>
  			<AvatorPic src={avatar} alt={name} width="48" />
			<Name>{name}</Name>
		</Item>
	)
}