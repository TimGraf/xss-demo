import React from 'react';
import DOMPurify from 'dompurify';
import './Components.css';

export default class NotSoDangerousComponent extends React.Component {

    state = {
        text: 'hello World',
    };

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    danger(input) {
        return {__html: DOMPurify.sanitize(input)}
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