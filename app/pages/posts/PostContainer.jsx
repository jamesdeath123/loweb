require('../../stylesheets/pages.posts.scss')

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { create, reply } from '../../actions/postActions'
import PostListWrapper from './PostListWrapper'

class PostContainer extends Component {
	render() {
		return (
			<div>
				<PostForm
					createPostHandler = {this.createPostHandler.bind(this)}
					>
					<PostListWrapper
						posts = {this.props.posts}
						replyPostHandler = {this.createPostHandler.bind(this)}
					/>
				</PostForm>
			</div>
		)
	}

	createPostHandler(message, author, originalPost) {
		if (!originalPost) {
			this.props.dispatch(create(message, author))
		} else {
			this.props.dispatch(reply(originalPost, message, author))
		}
	}
}

function select(state) {
	return {
		posts: state.user.posts,
		replies: state.user.replies
	}
}

export default connect(select)(PostContainer)