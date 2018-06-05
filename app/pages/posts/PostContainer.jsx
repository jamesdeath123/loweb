import React, {Component} from 'react'
import { connect } from 'react-redux'
import PostForm from './PostForm'
import { create } from "../../actions/postActions"

class PostContainer extends Component {
	render() {
		return (
			<div>
				<PostForm
					createPostHandler = {this.createPostHandler.bind(this)}
					createPostState = {this.props.createPostState}
				/>
			</div>
		)
	}

	createPostHandler(message, level) {
		this.props.dispatch(create(message, level))
	}
}

function select(state) {
	return {
		createPostState: state.createPostState,
	}
}

export default connect(select)(PostContainer)