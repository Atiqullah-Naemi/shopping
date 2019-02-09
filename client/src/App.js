import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'

class App extends Component {
render() {
	return (
		<Provider store={store}>
			<div className="App">
				<AppNavbar />
				<ShoppingList />
			</div>
		</Provider>
	)
}
}

export default App
