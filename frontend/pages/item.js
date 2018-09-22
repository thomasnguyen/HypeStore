import SingleItem from './../components/SingleItem';

const Item = (props) => (
	<div>
		<SingleItem id={props.query.id}>This is a single item!</SingleItem>
	</div>
);

export default Item;
