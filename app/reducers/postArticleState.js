import { POST_SUCCESS, POST_ERROR } from '../actions/articleActions'

export default (state = {
	message: '',
}, action) => {
	switch (action.type) {
		case POST_SUCCESS: {
			return Object.assign({}, state, {
				message:action.data,
			})
		}
		case POST_ERROR: {
			return Object.assign({}, state, {
				message: '',
			})
		}
		default:
			return state
	}
}