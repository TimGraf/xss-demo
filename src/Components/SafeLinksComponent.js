import React from 'react';
import './Components.css';

export default class SafeLinksComponent extends React.Component {

    state = {
        links: []
    };

    addLink(e) {
        if (e.key === 'Enter') {
            const suppliedUrl = e.target.value;
            const parsedUrl = new URL(suppliedUrl);
            
            if (!parsedUrl.protocol.startsWith("http")) {
                return;
            }

            this.setState({
                links: [...this.state.links, e.target.value]
            })
        }
    };

    render() {
        return (
            <div className="Component">
                <h1>{this.constructor.name}</h1>
                <input
                    onKeyDown={this.addLink.bind(this)}
                    type='text'
                >
                </input>
                <ul>
                    {this.state.links.map(link =>
                        <li><a href={link}>{link}</a></li>
                    )}
                </ul>
            </div>
        )
    }

}