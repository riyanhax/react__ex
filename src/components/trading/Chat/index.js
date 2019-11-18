import React, { useState } from "react";
import SimpleBarReact from "simplebar-react";

export default (props) => {
    const [value, setValue] = useState("");
    let { messages, makeMessage } = props
    let chatSubmit = (e) => {
        e.preventDefault();
        makeMessage(value, "en");
        setValue("")
    }
    let handleChangeChat = (e) => {
        setValue(e.target.value)
    }

    let messagesList
    if (messages) {
        messagesList = messages.map((item, index) => {
            return (
                <div className="chat__text m__gray" key={index}>
                    <span className="chat__text__name gray__text">Admin1:</span>
                    {item.text}
                </div>

            )
        })
    }

    return (
        <>
         <SimpleBarReact style={{ maxHeight: "calc(100vh - 68px - 36px)" }}>
            <div className="chat__col">
                <div className="chat__title">
                    CHAT
                    </div>
                    {messagesList}
            </div>
            </SimpleBarReact>
            <form className="chat__form">
                <div className="flex__jc__ac">
                    <input type="text" name="mes"
                        value={value}
                        className="chat__form__input"
                        onChange={(e) => handleChangeChat(e)}
                    />
                    <button type="submit"
                        onClick={(e) => chatSubmit(e)}
                        className="chat__form__submit mint" >Send</button>
                </div>
            </form>
        </>
    )
}


