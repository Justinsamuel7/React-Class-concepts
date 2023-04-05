import React,{Component} from "react";
import "./style.css";
import {useState} from "react";


export default class ClassComp extends Component{


  constructor(props) {
    super(props);

  }

  render() {
    
    return (
      <div>
        <h1>This is from Class Component</h1>
        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    );
  }


}

