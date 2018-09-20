import Link from 'next/link';
import UpdateItem from '../components/UpdateItem';

const update = (props) => (
	<div>
		<UpdateItem id={props.query.id}>Sell!</UpdateItem>
	</div>
);

export default update;
