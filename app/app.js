require('./stylesheets/vendor/bootstrap/css/bootstrap.min.v.3.3.5.css')
require('./stylesheets/app.scss')

import React from 'react'
import { render } from 'react-dom'
import { Route, Router, useRouterHistory, hashHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import root from './reducers'
import { applyMiddleware, createStore as initialCreateStore, compose } from 'redux'

import { env } from './config/config'
import HomePageContainer from './pages/homepage/HomePageContainer'
import ArticleContainer from './pages/articles/ArticleContainer'

let createStore = initialCreateStore

if (__DEV__) {
	createStore = compose(
		require('redux-devtools').devTools(),
		require('redux-devtools').persistState(
			window.location.href.match(/[?&]debug_session=([^&]+)\b/)
		),
		createStore
	)
}

let appHistory = null

if (env === 'dev') {
	appHistory = hashHistory
} else {
	appHistory = useRouterHistory(createBrowserHistory)({basename: '/'})
}

let store = createStore(root,
	compose(
		applyMiddleware(thunk),
	)
)

let routes = (<div className="app">
			<Provider store={store}>
				<Router history={appHistory}>
					<Route name="main">
						<Route name="home" path="/" component={HomePageContainer}/>
						<Route name="home" path="articles/post" component={ArticleContainer}/>
					</Route>
				</Router>
			</Provider>
		</div>
)

render(routes, document.getElementById('root'))
