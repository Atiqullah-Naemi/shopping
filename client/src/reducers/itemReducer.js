import uuid from 'uuid'
import {
	GET_ITEMS,
	ADD_ITEM,
	DELETE_ITEM
} from '../actions/types'

const initialState = {
	items: [
		{id: uuid(), name: 'Item 1'},
		{id: uuid(), name: 'Item 2'},
		{id: uuid(), name: 'Item 3'}
	]
}

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			}
		default:
			return state
	}
}