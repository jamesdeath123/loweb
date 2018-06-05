import axios from 'axios'
import { loumsApp } from '../config/config'
import { loumsAPI } from '../config/api'

export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'

export function create(message, level) {
	return dispatch => {
		axios.post(loumsApp.baseUrl + loumsAPI.postArticle,
		{
			content: message,
			level
		})
		.then(function(res){
			if (res.status === 200 && res.data && res.data.result) {
				dispatch(postSuccess(message, res.data.data))
			}
		}).catch(function(err) {
			dispatch(postError(err))
		})
	}
}

function postSuccess(post, postId) {
	return {
		type: POST_SUCCESS,
		post,
		postId
	}
}

function postError(error) {
	return {
		type: POST_ERROR,
	}
}