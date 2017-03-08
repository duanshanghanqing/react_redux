import React, { Component, PropTypes } from 'react'
import HeadComponent from '../components/Head'

class Index extends Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return  <div>
                    <HeadComponent content="资讯" />
                </div>
    }
}
export default Index