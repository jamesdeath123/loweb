import axios from 'axios'
import { loumsApp } from '../config/config'
import { loumsAPI } from '../config/api'
import { getPosts } from './userActions'

export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_ERROR = 'POST_ERROR'

export const POST_REPLY_SUCCESS = 'POST_REPLY_SUCCESS'
export const POST_REPLY_ERROR = 'POST_REPLY_ERROR'

export function create(content, author, level) {
	return dispatch => {
		axios.post(loumsApp.baseUrl + loumsAPI.postArticle,
		{
			content,
			author,
			level
		}).then(function(res){
			if (res.status === 200 && res.data && res.data.result) {
				dispatch(getPosts(author))
				dispatch(postSuccess(content, res.data.data))
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

export function reply(originalPost, content, author) {
	return dispatch => {
		axios.post(loumsApp.baseUrl + loumsAPI.posts + originalPost.id + "/" + loumsAPI.replyPost,
		{
			content,
			author
		}).then(function(res){
			if (res.status === 200 && res.data && res.data.result) {
				dispatch(getPosts(author))
				dispatch(postSuccess(content, res.data.data))
			}
		}).catch(function(err) {
			dispatch(postError(err))
		})
	}
}