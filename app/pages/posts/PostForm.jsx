require('../../stylesheets/pages.posts.scss')
import React, {Component} from 'react'

export default class PostForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
			name: '',
			validMessageLength: true
		}
	}

	render() {
		let messageErrorhintClass = ""
		let errorMessage = " "
		let disableButton = !(this.state.message.length > 0 && this.state.name.length > 0)
		if (!this.state.validMessageLength) {
			messageErrorhintClass = " message-error-hint"
			errorMessage = "Max length is 140 characters."
		}
		return (<div>
			<form id="postForm" className="post-form text-center" name="postForm">
				<div className="error-text">{errorMessage}</div>
				<div>
					<textarea className={"form-control " + (messageErrorhintClass)}
						aria-label="message"
						placeholder="Input the post" 
						type="text"
						value={this.state.message}
						onChange={this.handleChangeMessage.bind(this)}
						/>
						<div className="text-length-count">
							<div>{this.state.message.length}/140</div>
						</div>
				</div>
				<div>
					<input className="form-control"
						aria-label="name"
						placeholder="What's your name?" 
						type="text"
						value={this.state.name}
						onChange={this.handleChangeName.bind(this)}
						/>
				</div>
				<div className="done">
					<button className="btn btn-primary" type="submit" 
						onClick={this.handleClickPost.bind(this)} 
						disabled={disableButton}
						>
						<span>Done</span>
					</button>
				</div>
				{this.props.children}
			</form>
		</div>)
	}

	handleChangeMessage(event) {
		if (event.target.value.length < 11) {
			this.setState({
				message: event.target.value,
				validMessageLength: true
			})
		} else {
			this.setState({validMessageLength: false})
		}
	}

	handleChangeName(event) {
		this.setState({
			name: event.target.value,
		})
	}

	handleClickPost(event) {
		event.preventDefault()
		this.props.createPostHandler(this.state.message, this.state.name, 1)
	}
}