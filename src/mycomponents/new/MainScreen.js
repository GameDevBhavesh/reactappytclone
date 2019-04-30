import React, { Component } from "react"
import ContentRow from "../subcomponents/ContentRow"

//styles
import './MainScreen.css';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []  }
     fetch(`http://localhost:5000/send/page/home`)
      .then(responce => responce.json())
      .then(json => this.setState({ data: json }))
      .catch(err => console.log(err))
  }
    render() {
        let rowcomponents = this.state.data.map(obj => <div key={obj.id} ><ContentRow filtered={obj.name} /> <hr ></hr></div>);

        return <div className="rightdiv">
                {rowcomponents}
            </div>

        
    }

}
export default MainScreen;