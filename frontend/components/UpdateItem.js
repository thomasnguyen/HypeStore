import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import Router from 'next/router';

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			price
		}
	}
`;

const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION($title: String!, $description: String!, $price: Int!) {
		updateItem(title: $title, description: $description, price: $price) {
			id
			title
			description
			price
		}
	}
`;

class UpdateItem extends Component {
	state = {};

	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	render() {
		return (
			<Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
				{({ data, loading }) => {
					if (loading) return <p>Loading....</p>;
					return (
						<Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
							{(updateItem, { loading, error }) => (
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
												defaultValue={data.item.title}
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
												value={data.item.price}
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
												value={data.item.description}
												onChange={this.handleChange}
											/>
										</label>
										<button type="submit"> Save Changes</button>
									</fieldset>
								</Form>
							)}
						</Mutation>
					);
				}}
			</Query>
		);
	}
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
export { SINGLE_ITEM_QUERY };
