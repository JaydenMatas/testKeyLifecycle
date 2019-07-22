import React, {Component} from 'react'
import shortid from 'shortid';
import TestComponent2 from './TestComponent2'
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.compKey = shortid.generate();
        this.state = {
            valueToCauseReRender: 're-render-1'
        }
    }

    componentDidMount() {
        this.compKey = shortid.generate();
        //this.setState({valueToCauseReRender: 're-render-2'})
    }

    render() {
        return <div key={this.compKey}>compKey is: {this.compKey}</div>
    }
}

export default TestComponent