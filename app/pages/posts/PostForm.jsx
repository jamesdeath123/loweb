require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'

export default class PostForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
		}
	}

	render() {
		const { createPostState } = this.props
		return (<div>
			<form className="post-form text-center" id="postForm" name="postForm">
				<div>
					<input className="form-control"
						aria-label="firstname"
						placeholder="Provide a message" 
						type="text"
						value={this.state.message}
						onChange={this.handleChangeMessage.bind(this)}
						/>
				</div>
				<div className="message">{createPostState.post}</div>
				<div className="done">
					<button className="btn btn-primary btn-block" type="submit" 
						onClick={this.handleClickPost.bind(this)} 
						>
						<span>Done</span>
					</button>
				</div>
			</form>
		</div>)
	}


	handleChangeMessage(event) {
		this.setState({
			message: event.target.value,
		})
	}

	handleClickPost(event) {
		event.preventDefault()
		this.props.createPostHandler(this.state.message, 1)
	}
}