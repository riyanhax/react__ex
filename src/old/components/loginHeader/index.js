import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';
export default function LoginHeader(props){
    return(
        
            <div className="authForm__Header">
                        <h1>{props.text}</h1>
                        <span>
                            {props.span}
                            <NavLink  to={props.lnk} exact>
                            {props.txtlnk}
                             </NavLink>
                        </span>
            </div>
        
    );  
}