require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'

export default class PostItem extends Component {

	render() {
		const { post } = this.props
		return (<div className="post-item">	
			<hr className="separator"/>
			<div className="post-content"> {post.content}</div>
			<div className="post-author"><i><b>{post.author}
				</b></i> posted at <i>{post.createdAt}</i>
			</div>
		</div>)
	}
}