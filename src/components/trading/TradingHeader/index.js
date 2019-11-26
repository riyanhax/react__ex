import React from "react";
import { NavLink } from 'react-router-dom';
import Select from 'react-select'

export default (props) => {


    let { pairs, pair, handleChangePairs, wallet, info, lastPrice } = props


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
    if (pairs) {
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
    let walletBaseLabel,
        walletQote,
        walletBase,
        walletQoteLabel,
        min_price,
        max_price,
        volume,
        diff,
        lastPriceValue,
        lastPriceClass

    if (wallet) {
        walletBase = wallet[0].balance
        walletQote = wallet[1].balance
        walletBaseLabel = wallet[0].currency
        walletQoteLabel = wallet[1].currency
    }

    if (info) {
        min_price = info.min_price
        max_price = info.max_price
        volume = info.volume
        diff = info.diff
    }
    if(lastPrice){
        lastPriceValue = lastPrice.price
        lastPriceClass = lastPrice.class
    }
    return (
        <div className="header__trading gray">
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
                            <div className={`header__col__text ${lastPriceClass}`}>
                                {lastPriceValue}

                            </div>
                        </div>
                        <div className="header__col__inner">
                            <div className="header__col__text gray__text">
                                Change
                            </div>
                            {diff > 0 ?
                                <div className="header__col__text mint__text">
                                    {diff} %
                                </div>
                                : <div className="header__col__text red__text">
                                    {diff} %
                                </div>
                            }

                        </div>
                        <div className="header__col__inner ">
                            <div className="header__col__text gray__text">
                                Low
                                </div>
                            <div className="header__col__text">
                                {min_price}
                            </div>
                        </div>
                        <div className="header__col__inner ">
                            <div className="header__col__text gray__text">
                                High
                                </div>
                            <div className="header__col__text">
                                {max_price}
                            </div>
                        </div>
                        <div className="header__col__inner">
                            <div className="header__col__text gray__text">
                                Volume
                                </div>
                            <div className="header__col__text">
                                {volume}
                            </div>
                        </div>
                    </div>

                    <div className="header__col  cur__col" >
                        <div className="flex__ac__100">
                            <img src="/assets/img/car__img.png" className="header__col__cur__img" />
                            <div className="header__col_cur__text">
                                {select}
                            </div>
                        </div>

                    </div>
                    <div className="header__col">
                        <div className="flex__ac__100">
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
                        <div className="flex__ac__100">
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
                        <div className="flex__ac__100">
                            <i className="fa fa-globe-americas header__col__img"></i>
                            <a href="" className="header__col__lang">ENGLISH</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

