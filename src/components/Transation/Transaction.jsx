import { Tr } from "./Transaction.styled"
import PropTypes from 'prop-types';
export function Transaction(props) {
	const { type, amount, currency ,bacColor} = props
	return (
	<Tr layer={bacColor}>
      <td>{type}</td>
			<td>{amount}</td>
			<td>{currency}</td>
    </Tr>
	)
}

Transaction.propType = {
	id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
	bacColor: PropTypes.string.isRequired,
}
