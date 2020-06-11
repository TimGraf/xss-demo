import React from 'react';
import './Components.css';

export default class BasicComponent extends React.Component {

    state = {
        text: 'hello World',
    };

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div className="Component">
                <h1>{this.constructor.name}</h1>
                <input
                    onChange={this.handleChange.bind(this)}
                    type='text'
                >
                </input>
                <h2>{this.state.text}</h2>
            </div>
        );
    }

}