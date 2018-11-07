import React from 'react'
import { Provider } from 'react-redux'
import withReduxStore from '../store/with-redux-store'
import App, { Container } from 'next/app'
import '../static/styles/antd-mobile.less'

class MyApp extends App {
	render() {
		const { Component, pageProps, store } = this.props
		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp)
