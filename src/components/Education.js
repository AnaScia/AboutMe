import React from "react";
import "../stylesheet/Education.css";

function Education(props){
    return(
      <div className="container-course">
        <img 
         className="image-course"
         src={require(`../img/${props.image}`)}
         alt="aticana"
        />
        <div className="container-text-course">
        <p className="name-course">{props.name}</p>
        <p className="date-course">{props.date}</p>
        <p className="name-institution-course">{props.institution}<br/>{props.sigla}</p>
        </div>
      </div>
    );
}
export default Education;