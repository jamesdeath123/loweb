require('../../stylesheets/pages.posts.scss')

import React, {Component} from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { create } from '../../actions/postActions'
import PostList from './PostList'

class PostContainer extends Component {
	render() {
		return (
			<div>
				<PostForm
					createPostHandler = {this.createPostHandler.bind(this)}
					>
					<PostList
						posts = {this.props.posts}
					/>
				</PostForm>
			</div>
		)
	}

	createPostHandler(message, author, level) {
		this.props.dispatch(create(message, author, level))
	}
}

function select(state) {
	return {
		posts: state.user.posts,
	}
}

export default connect(select)(PostContainer)