import React,{Component} from "react";
import "./style.css";
import ClassComp from "./ClassComp"


export default function App(){

    return (
      <div>
        <h1>This is from Functional Component APP</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

        <ClassComp/>

      </div>
    );


}

