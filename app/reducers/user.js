import { GET_POSTS_BY_AUTHOR_SUCCESS, GET_POSTS_BY_AUTHOR_ERROR } from '../actions/userActions'

export default (state = {
	posts: [],
	error: ''
}, action) => {
	switch (action.type) {
		case GET_POSTS_BY_AUTHOR_SUCCESS: {
			window.console.log(action.posts)
			return Object.assign({}, state, {
				posts: action.posts,
				error: ''
			})
		}
		case GET_POSTS_BY_AUTHOR_ERROR: {
			return Object.assign({}, state, {
				posts: [],
				error
			})
		}
		default:
			return state
	}
}