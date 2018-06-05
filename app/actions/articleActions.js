import axios from 'axios'
import { loumsApp } from '../config/config'
import { loumsAPI } from '../config/api'

export const POST_SUCCESS = 'SIGNUP_SUCCESS'
export const POST_ERROR = 'SIGNUP_ERROR'

export function post(data) {
	return dispatch => {
		axios.post(loumsApp.baseUrl + loumsAPI.postArticle,
		{
			data,
		})
		.then(function(res){
			if (res.status === 200 && res.data && res.data.result) {
				dispatch(postSuccess(res.data.data))
			}
		}).catch(function(err) {
			dispatch(postError(err))
		})
	}
}

function postSuccess(data) {
	return {
		type: POST_SUCCESS,
		data: data
	}
}

function postError(error) {
	return {
		type: POST_ERROR,
	}
}