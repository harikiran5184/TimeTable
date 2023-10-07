import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Admin from './Admin'
import Assign from './Assign'
import Test from './test'
import Test1 from './Test1'
import Adminhome from './adminhome'
import Admincheck from './admincheck'
import Edit from './edit'
export default class App extends Component {
  render() {
	return (
	  <div>
	  <Router>
		<Switch>
			<Route exact path='/' ><Login /></Route>
			<Route exact path='/home' ><Home /></Route>
			<Route exact path='/admin' ><Admin /></Route>
			<Route exact path='/admin/assign' ><Assign /></Route>
			<Route exact path='/test' ><Test /></Route>
			<Route exact path='/test1' ><Test1 /></Route>
			<Route exact path='/adminhome' ><Adminhome /></Route>
			<Route exact path='/admincheck' ><Admincheck /></Route>
			<Route exact path='/adminedit' ><Edit /></Route>
		</Switch>
	  </Router>
	  </div>
	)
  }
}
