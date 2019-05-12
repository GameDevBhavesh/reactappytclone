import React, { Component } from 'react';
import ContentCard from "./ContentCard.js"
import "./contentrow.css"





export default class ContentRow extends Component{
    
    constructor(props){
        
        super(props);
        this.state={data:[]}
        console.log(this.props.filtered);
       const handle=this.props.filtered;
       var max=this.props.max;
       if(!max){
           max="4";
       }
        fetch(`https://serveryt.herokuapp.com/send/filter/${handle}/${max}`)
    .then(responce => responce.json())
    .then(json => this.setState({data:json}))
    .catch( err => console.log(err))
    }

    render(){ 

    const components = this.state.data.map(card => <ContentCard key={card.id} card={card} />);

    return <div className="contentrow">
        <h1 className="filtered">{this.props.filtered}</h1>
         {components}
    </div>
    }
    
}


