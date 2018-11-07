import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.devToolsExtension && window.devToolsExtension()
		: f => f
)

const createStoreWithMiddleware = applyMiddleware()(createStore)

export function initializeStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, enhancers)
}