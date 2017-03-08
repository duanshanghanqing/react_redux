import React, { Component, PropTypes } from 'react';
import { Router, Route, Link,IndexLink,IndexRoute, hashHistory, Redirect, browserHistory } from 'react-router'


import Home from './Home'
import Index from './Index'


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {//component={app}
    const {} = this.props;
    return (
		<Router history={hashHistory}>
			<Route path="/">
				<IndexRoute component={Home} />
        <Route path="/home" component={Home}/>
        <Route path="/index" component={Index}>

        </Route>
			</Route>
	  </Router>
    );
  }
}
App.propTypes = {
 
};
export default App