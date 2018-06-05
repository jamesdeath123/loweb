import { POST_SUCCESS, POST_ERROR } from '../actions/postActions'

export default (state = {
	post: '',
	postId: ''
}, action) => {
	switch (action.type) {
		case POST_SUCCESS: {
			return Object.assign({}, state, {
				post: action.post,
				postId: action.postId
			})
		}
		case POST_ERROR: {
			return Object.assign({}, state, {
				post: '',
				postId: ''
			})
		}
		default:
			return state
	}
}