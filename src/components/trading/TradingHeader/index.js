import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Select from 'react-select'
import { history } from 'src/history';
import { useSelector, useDispatch } from "react-redux"
import actions from "act/"
import HeaderItem from "./HeaderItem"

export default (props) => {

    let { pairs, pair, cable, base_unit, quote_unit } = props;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.wallet.loadWallet(base_unit, quote_unit));
        dispatch(actions.info.loadInfo(pair))
    }, [])

    let lastPrice = useSelector(state => (state.tradingReducer.lastPrice))
    let info = useSelector(state => (state.tradingReducer.info))
    let wallet = useSelector(state => (state.walletReducer.wallet))

    let handleChangePairs = (e) => {
        cable.subscriptions.consumer.disconnect();
        let pair = e.value
        history.push(
            { pathname: `/trading/${pair}` }
        )
    }
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
    if (lastPrice) {
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
                        <HeaderItem
                            text="Last price"
                            data={lastPriceValue}
                            className={lastPriceClass}
                        />

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
                        <HeaderItem
                            text="Low"
                            data={min_price}
                            className= "gray__text"
                        />
                        <HeaderItem
                            text="High"
                            data={max_price}
                            className= "gray__text"
                        />
                        <HeaderItem
                            text="Volume"
                            data={volume}
                            className= "gray__text"
                        />
                    </div>

                    <div className="header__col  cur__col" >
                        <div className="flex__ac__100">
                            <i className="fas fa-coins header__col__cur__img"></i>
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
                            <NavLink className="header__col__logout gray__text" to="/account" exact >
                                My Account&nbsp;
                                </NavLink>
                            <NavLink className="header__col__logout gray__text" to="/login" exact >
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

