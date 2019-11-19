import React from 'react';
import './index.css';

export default (props) =>{
    return(
        <>
        <div className="pagination__container">
                <div className="white__text">Page</div>
                <div className="pagination__page">1</div>
                <div className="white__text">of 2000</div>
                <div className="pagination__arrow_container">
                    <i className="fa fa-arrow-left"></i>
                    &nbsp;
                    <i className="fa fa-arrow-right"></i>
                </div>
                <div className="pagination__bottom_link">All markets</div>
            </div>
        </>
    );
}