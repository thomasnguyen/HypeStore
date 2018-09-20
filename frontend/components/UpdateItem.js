import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import Router from 'next/router';

const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$image: String
		$largeImage: String
		$price: Int!
	) {
		updateItem(title: $title, description: $description, image: $image, largeImage: $largeImage, price: $price) {
			id
		}
	}
`;

class UpdateItem extends Component {
	state = {
		title: 'Cool Shoes',
		description: 'fff',
		image: '',
		largeImage: '',
		price: 0
	};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
				{(createItem, { loading, error }) => (
					<Form
						onSubmit={async (e) => {
							// stop the form from submitting
							e.preventDefault();
							// call mutation
							const res = await createItem();
							// change them to the single item page
							Router.push({
								pathname: '/item',
								query: { id: res.data.createItem.id }
							});
						}}
					>
						<h2>Sell an Item</h2>
						<Error error={error} />
						<fieldset disabled={loading} aria-busy={loading}>
							<label htmlFor="title">
								Title
								<input
									type="text"
									id="title"
									name="title"
									placeholder="Title"
									required
									value={this.state.title}
									onChange={this.handleChange}
								/>
							</label>

							<label htmlFor="price">
								Price
								<input
									type="number"
									id="price"
									name="price"
									placeholder="price"
									required
									value={this.state.price}
									onChange={this.handleChange}
								/>
							</label>

							<label htmlFor="description">
								description
								<textarea
									id="description"
									name="description"
									placeholder="Enter a description"
									required
									value={this.state.description}
									onChange={this.handleChange}
								/>
							</label>
							<button type="submit"> Submit</button>
						</fieldset>
					</Form>
				)}
			</Mutation>
		);
	}
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
