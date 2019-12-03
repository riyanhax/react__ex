import React from "react";
export default (props) => {
    let {data, text, className } = props;
    return (
        <div className="header__col__inner ">
            <div className="header__col__text">
                {text}
            </div>
            <div className={`header__col__text ${className}`}>
                {data}
             </div>
        </div>
    )

}