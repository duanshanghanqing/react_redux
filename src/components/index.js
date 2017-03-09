import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, Redirect, browserHistory } from 'react-router'

//导航
const App = React.createClass({
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/inbox">Inbox</Link></li>
				</ul>
				{this.props.children }
			</div>
		)
	}
})
/*
{this.props.children || <Home/>}
在this.props.children没有值的时候。通过<Dashboard/>渲染访问"/"时默认显示的组件
当然在后面有更优雅的方式解决
*/


//访问"/"显示的页面 
const Home = React.createClass({
  render() {
    return <h3>Welcome to the app!</h3>
  }
})
//访问"/abou"显示的页面
const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

//访问"/inbox"显示的页面
const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})




class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {  } = this.props;
    return (
      <Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
				<Route path="messages/:id" component={Message} />
				<Redirect from="messages/:id" to="/messages/:id" />
			</Route>
		</Route>
	</Router>
    );
  }
}

//限制组件的props安全
Index.propTypes = {
 
};

export default Index;
