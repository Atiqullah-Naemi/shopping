import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	CSSTransition,
	TransitionGroup
} from 'react-transition-group'
import {
	Button,
	ListGroup,
	ListGroupItem,
	Container
} from 'reactstrap'
import uuid from 'uuid'
import { getItems, deleteItem } from '../actions/itemActions'

class ShoppingList extends Component {
	componentDidMount() {
		this.props.getItems()
	}

	onClickDelete = (id) => {
		this.props.deleteItem(id)
	}

	render() {
		const { items } = this.props.item

		return (
		  	<>
				<Container>
					<ListGroup>
						<TransitionGroup className="shopping-list">
							{
								items.map(({id, name}) => (
									<CSSTransition
									key={id}
									timeout={500}
									classNames="fade">
										<ListGroupItem>
											<Button
											color="danger remove-item"
											size='sm'
											onClick={this.onClickDelete.bind(this, id)}
											>&times;</Button>
											{name}
										</ListGroupItem>
									</CSSTransition>
								))
							}
						</TransitionGroup>
      			</ListGroup>
				</Container>
		   </>
		)
	}
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList)
