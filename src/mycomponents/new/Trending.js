import React, { Component } from "react"
import ContentRow from "../subcomponents/ContentRow"

//styles
import './MainScreen.css';

class Trending extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return <div className="rightdiv">
            <div >
                <ContentRow max={this.props.max} filtered={this.props.filtered} />
                <hr ></hr>
            </div>
        </div>


    }

}
export default Trending;