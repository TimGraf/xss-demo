import React from 'react';
import './Components.css';

export default class DangerousComponent extends React.Component {

    state = {
        text: 'hello World',
    };

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    danger(input) {
        return {__html: input}
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
                <h2 dangerouslySetInnerHTML={this.danger(this.state.text)}></h2>
            </div>
        );
    }

}