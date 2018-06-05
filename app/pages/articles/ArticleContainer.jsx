import React, {Component} from 'react'
import { connect } from 'react-redux'
import ArticleForm from './ArticleForm'
import { post } from "../../actions/articleActions"

class ArticleContainer extends Component {
	render() {
		return (
			<div>
				<ArticleForm
					postArticleHandler = {this.postArticleHandler.bind(this)}
					postArticleState = {this.props.postArticleState}
				/>
			</div>
		)
	}

	postArticleHandler(message) {
		this.props.dispatch(post(message))
	}
}

function select(state) {
	return {
		postArticleState: state.postArticleState,
	}
}

export default connect(select)(ArticleContainer)