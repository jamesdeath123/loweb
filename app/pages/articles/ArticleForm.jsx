require('../../stylesheets/pages.articles.scss')
import React, {Component} from 'react'

export default class SignupForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: '',
		}
	}

	render() {
		const { postArticleState } = this.props
		return (<div>
			<form className="article-form text-center" id="articleForm" name="articleForm">
				<div>
					<input className="form-control"
						aria-label="firstname"
						placeholder="Provide a message" 
						type="text"
						value={this.state.message}
						onChange={this.handleChangeMessage.bind(this)}
						/>
				</div>
				<div className="message">{postArticleState.message}</div>
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
		this.props.postArticleHandler(this.state.message)
	}
}