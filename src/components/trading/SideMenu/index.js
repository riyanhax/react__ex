import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

export default (props) => {
  const {pair} = props
  return (
    <div className="ex__side">
      <div className="ex__side__menu">
        <NavLink className="ex__side__link" to={`/trading/${pair}`} exact activeClassName="ex__side__link__active">
          <i className="fa fa-comment"></i>
        </NavLink>
        <NavLink className="ex__side__link" to="/clock" exact activeClassName="ex__side__link__active">
          <i className="fa fa-clock-o"></i>
        </NavLink>
        <NavLink className="ex__side__link" to="/faq" exact activeClassName="ex__side__link__active">
          <i className="fa fa-question-circle"></i>
        </NavLink>
        <NavLink className="ex__side__link" to={`/trading/${pair}/options`} exact activeClassName="ex__side__link__active">
          <i className="fa fa-cog"></i>
        </NavLink>
      </div>
    </div>
  )

}


