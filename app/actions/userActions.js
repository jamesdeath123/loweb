import axios from 'axios'
import { loumsApp } from '../config/config'
import { loumsAPI } from '../config/api'

export const GET_POSTS_BY_AUTHOR_SUCCESS = 'GET_POSTS_BY_AUTHOR_SUCCESS'
export const GET_POSTS_BY_AUTHOR_ERROR = 'GET_POSTS_BY_AUTHOR_ERROR'

export function getPosts(author) {
	return dispatch => {
		axios.get(loumsApp.baseUrl + loumsAPI.users + author + "/" + loumsAPI.posts)
		.then(function(res){
			if (res.status === 200 && res.data && res.data.count) {
				dispatch(getPostsSuccess(res.data.data))
			}
		}).catch(function(err) {
			dispatch(getPostsError(err))
		})
	}
}

function getPostsSuccess(posts) {
	return {
		type: GET_POSTS_BY_AUTHOR_SUCCESS,
		posts
	}
}

function getPostsError(error) {
	return {
		type: GET_POSTS_BY_AUTHOR_ERROR,
		error
	}
}