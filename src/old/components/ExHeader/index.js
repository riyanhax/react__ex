import React from "react";
import { NavLink } from 'react-router-dom';
import Select from 'react-select'
export default class ExHeader extends React.Component {


    componentDidMount() {

    }
    render() {
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
        if (this.props.loading) {
            select = ""
        }
        else {
            let options = this.props.pairs.map((pair) => {
                return (
                    {
                        value: pair.id,
                        label: pair.name,
                        base_unit:pair.base_unit,
                        quote_unit:pair.quote_unit
                    }
                )
            })
            select = <Select
                defaultValue={options[0]}
                options={options}
                styles={colourStyles}
                onChange={this.props.handleChangePairs}
            />
        }

       

        return (
            <div className="header gray">
                <div className="container">
                    <div className="row flex">
                        <div className="header__col1">
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
                                <div className="header__coc_cur__text">

                                    {/* <select className="red__table__header__select">
                                        {pairsList}
                                    </select> */}
                                    {select}
                                </div>
                                {/* <div className="header__col__cur__link">
                                </div> */}
                            </div>

                        </div>
                        <div className="header__col">
                            <div className="fac">
                                <img src="/assets/img/walet.png" className="header__col__wal__img" />
                                <div>
                                    <div className="header__col__text">
                                        11.4400432 BTC
                                    </div>
                                    <div className="header__col__text gray__text">
                                        24,000.12 USD (est.)
                                     </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="header__col">
                            <div className="fac">
                                <img src="../../../assets/img/login.png" className="header__col__login__img" />
                                <a href="" className="header__col__login">My Account </a>
                                <a href="" className="header__col__logout gray__text"> | Logout</a>
                            </div>
                        </div> */}
                        <div className="header__col">
                            <div className="fac">
                                <img src="/assets/img/login.png" className="header__col__login__img" />
                                <NavLink className="" to="/" exact >
                                    Login
                                </NavLink>
                            </div>
                        </div>
                        <div className="header__col">
                            <div className="fac">
                                <img src="/assets/img/lang.png" className="header__col__lang__img" />
                                <a href="" className="header__col__lang">ENGLISH</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

