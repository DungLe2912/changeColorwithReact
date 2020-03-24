import React, { Component } from 'react';

class Reset extends Component {
    onReset(value){
        this.props.onReset(value);
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={()=>this.onReset(true)}>reset</button>
        );
    }
}

export default Reset;