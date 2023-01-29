import { AllFrendList } from "./FriendList.styled"
import { Friend } from "components/Frend/Frend"
import PropTypes from "prop-types";
export function FrendList({friends}) {
	return (
		
		<AllFrendList>
			{friends.map(item => (
				<Friend key={item.id}
					avatar={item.avatar}
					name={item.name}
					isOnline={item.isOnline}
				/>
			))}
		</AllFrendList>
	)
};

FrendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.exact( {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
}