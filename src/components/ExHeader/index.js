import React from "react";
import { NavLink } from 'react-router-dom';
import Select from 'react-select'

export default (props) => {

    let { pairs, pair, loading, handleChangePairs, wallet } = props
    const colourStyles = {
        control: (styles) => {
            return {
                ...styles,
                backgroundColor: '#111622',
                border: "none",
                width: "120px"
            }
        },

        option: (styles) => {
            return {
                ...styles,
                backgroundColor: '#111622',
                border: "none",
                width: "120px",
            }
        },

        indicatorSeparator: styles => ({
            ...styles,
            display: "none"
        }),
        placeholder: styles => ({
            ...styles,
            color: "#fff"
        }),
        singleValue: styles => ({
            ...styles,
            color: "#fff"
        }),
        menuList: styles => ({
            ...styles,
            padding: "0"
        })

    }
    let select = ""
    if (!loading) {
        let options = pairs.map((pair) => {
            return (
                {
                    value: pair.id,
                    label: pair.name,
                    base_unit: pair.base_unit,
                    quote_unit: pair.quote_unit
                }
            )
        })
        let optionIndex = options.findIndex(i => i.value == pair);
        select = <Select
            defaultValue={options[optionIndex]}
            options={options}
            styles={colourStyles}
            onChange={handleChangePairs}
        />
    }
    let walletBase = "",
        walletQote = "",
        walletBaseLabel = "",
        walletQoteLabel = ""


    if (wallet) {
        walletBase = wallet[0].balance
        walletQote = wallet[1].balance
        walletBaseLabel = wallet[0].currency
        walletQoteLabel = wallet[1].currency
    }

    return (
        <div className="header gray">
            <div className="container">
                <div className="flex">
                    <div className="header__col__logo">
                        <a href="https://azbit.com/">
                            <img src="/assets/img/logo.png" className="logo__img" />
                        </a>
                    </div>
                    <div className="header__col flex">
                        <div className="header__col__inner">
                            <div className="header__col__text gray__text">
                                Last price
                                 </div>
                            <div className="header__col__text">
                                0.0000000031
                                 </div>
                        </div>
                        <div className="header__col__inner">
                            <div className="header__col__text gray__text">
                                (14.81)
                                </div>
                            <div className="header__col__text mint__text">
                                +14.81%
                                </div>
                        </div>
                        <div className="header__col__inner ">
                            <div className="header__col__text gray__text">
                                Low
                                </div>
                            <div className="header__col__text">
                                0.0000000026
                                 </div>
                        </div>
                        <div className="header__col__inner ">
                            <div className="header__col__text gray__text">
                                High
                                </div>
                            <div className="header__col__text">
                                0.0000000026
                                </div>
                        </div>
                        <div className="header__col__inner">
                            <div className="header__col__text gray__text">
                                Volume
                                </div>
                            <div className="header__col__text">
                                9.76
                                </div>
                        </div>
                    </div>

                    <div className="header__col  cur__col" >
                        <div className="fac">
                            <img src="/assets/img/car__img.png" className="header__col__cur__img" />
                            <div className="header__col_cur__text">
                                {select}
                            </div>
                        </div>

                    </div>
                    <div className="header__col">
                        <div className="fac">
                        <i className="fa fa-wallet header__col__img"></i>
                            <div>
                                <div className="header__col__text">
                                    {walletQote} <span>{walletQoteLabel}</span>

                                </div>
                                <div className="header__col__text gray__text">
                                    {walletBase} <span>{walletBaseLabel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__col">
                        <div className="fac">
                        <i className="fas fa-user-circle header__col__login__img mint__text"></i>
                            <NavLink className="header__col__logout gray__text" to="/" exact >
                                My Account&nbsp;
                                </NavLink>
                            <NavLink className="header__col__logout gray__text" to="/" exact >
                                | Logout
                                </NavLink>
                        </div>
                    </div>

                    <div className="header__col">
                        <div className="fac">
                        <i className="fa fa-globe-americas header__col__img"></i>
                            <a href="" className="header__col__lang">ENGLISH</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

