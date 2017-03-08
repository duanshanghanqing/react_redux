import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
		<h1>获取参数</h1>
		<h2>userName:{this.props.params.userName}</h2>
        <h2>repoName:{this.props.params.repoName}</h2>
      </div>
    )
  }
})
