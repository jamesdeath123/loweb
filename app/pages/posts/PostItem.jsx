require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'
import PostForm from './PostForm'

export default class PostItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			showReplyForm: false
		}
	}

	render() {
		const { post } = this.props
		let showReplyFormFlag = this.state.showReplyForm ? "" : " hide"
		return (<div className="post-item">	
			<hr className="separator"/>
			<div className="post-content"> {post.content}</div>
			<div className="post-author"><i><b>{post.author}
				</b></i> posted at <i>{post.createdAt}</i>
			</div>
			<div className="reply-button">
				<button className="btn"
					onClick={this.toggleReplyForm.bind(this)} >
					<span>reply</span>
				</button>
			</div>
			<div className={showReplyFormFlag}>
				<PostForm createPostHandler = {this.createPostHandler.bind(this)}/>
			</div>
		</div>)
	}

	toggleReplyForm() {
		this.setState({showReplyForm: !this.state.showReplyForm})
	}

	createPostHandler() {
		console.log("hey")
	}
}