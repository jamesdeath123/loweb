require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'
import PostList from './PostList'

export default class PostListWrapper extends Component {

	render() {
		const { posts } = this.props
		let hide = ""
		if (!posts.length) {
			hide = " hide"
		}
		return (<div>
			<div className= {"post-list-title " + hide}>previous posts</div>
			<PostList
				posts = {this.props.posts}
				replyPostHandler = {this.props.replyPostHandler.bind(this)}
			/>
		</div>)
	}
}