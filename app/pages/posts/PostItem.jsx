require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'
import PostForm from './PostForm'
import PostList from './PostList'

export default class PostItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			showSubmitReplyForm: false
		}
	}

	render() {
		const { post } = this.props

		let indentStyle = {marginLeft: (post.level-1)*50 + "px"}
		let showReplyFormFlag = this.state.showSubmitReplyForm ? "" : " hidden"
		return (<div><hr className="separator"/>
			<div className="post-item" style={indentStyle}>	
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
					<PostForm createPostHandler = {this.props.replyPostHandler.bind(this)}
									parentPost = {this.props.post}/>
				</div>
				<div>
					<PostList posts={post.replies} 
							replyPostHandler = {this.props.replyPostHandler.bind(this)}/>
				</div>
			</div>
		</div>)
	}

	toggleReplyForm() {
		this.setState({showSubmitReplyForm: !this.state.showSubmitReplyForm})
	}
}