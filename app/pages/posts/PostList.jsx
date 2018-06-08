require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'
import PostItem from './PostItem'

export default class PostList extends Component {

	render() {
		const { posts } = this.props
		return (<div>
			{
				posts.map((post, i) =>
					<PostItem post={post} key={i} replyPostHandler={this.props.replyPostHandler.bind(this)}></PostItem>
				)
			}
		</div>)
	}
}