import React, { Component } from 'react'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {
	state = {
		modal: false,
		name: ''
	}

	toggle = () => {
		this.setState({ modal: !this.state.modal })
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: [e.target.value] })
	}

	onSubmit = (e) => {
		e.preventDefault()

		const newItem = {
			name: this.state.name
		}

		// add Item via addItem action
		this.props.addItem(newItem)

		// close modal
		this.toggle()
	}

	render() {
		return (
		   <>
		   	<Button
					color="info"
					style={{marginTop: '15px', marginBottom: '15px'}}
					onClick={this.toggle}
				>Add Item</Button>
				<Modal
				isOpen={this.state.modal}
				toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input
								type="text"
								name="name"
								id="item"
								placeholder="Add Item"
								onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Button>Submit</Button>
        					</FormGroup>
				      </Form>
					</ModalBody>
				</Modal>
		   </>
		)
	}
}

const mapStateToProps = (state) => ({
	item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)
