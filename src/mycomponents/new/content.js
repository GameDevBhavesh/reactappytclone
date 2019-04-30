import React, { Component } from 'react';

import "./content.css"

class content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="rightdiv">
                <div className="content">
                <video  controls>
                <source src={`http://localhost:5000/watch/${this.props.match.params.video}`} type="video/mp4"></source> </video>
                <p>{this.props.match.params.video}</p>
                <img src={this.props.match.params.video} />
                </div>
               
            </div>
    }
}
export default content;