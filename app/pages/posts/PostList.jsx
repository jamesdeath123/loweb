require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'
import PostItem from './PostItem'

export default class PostList extends Component {

	render() {
		const { posts } = this.props
		let hide = ""
		if (!posts.length) {
			hide = " hide"
		}
		return (<div>
			<div className= {"post-list-title " + hide}>previous posts</div>
			{
				posts.map((post, i) =>
					<PostItem post={post} key={i}></PostItem>
				)
			}
		</div>)
	}
}