import React from 'react';
import './index.css';

export default (props) => {
  return (
    <>
      <div className="TotalContainer">
        <div className="outputFieldFlexCenter">
          <span >Total users: <span className="white__text"> {props.members}</span></span>
        </div>
        <div className="outputFieldFlexCenter">
          <span >Assets: <span className="white__text"> {props.assets}</span></span>
        </div>
        <div className="outputFieldFlexCenter">
          <span >Total traders: <span className="white__text"> {props.active_members}</span></span>
        </div>
      </div>
    </>
  );
}