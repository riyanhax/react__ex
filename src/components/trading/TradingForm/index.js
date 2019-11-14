import React from "react";

export default function (props) {

  const { action, limitFormData, onSubmit, onChange, quotePair, basePair } = props;

  let formFields = [];
  for (let name in limitFormData) {
    let item = limitFormData[name];
    if (name == "proc") {
      let buttons = limitFormData["proc"].map((el, i) => {
        return (
          <input key={i} type="button" value={el} className="ex__form__btn l__gray" />
        )
      })
      formFields.push(
        <div className="flex ex__form__btn__row" key={name}>
          {buttons}
        </div>
      )
    }
    else {
      formFields.push(
        <div key={name} className="ex__form__item fb gray__text">
          <label htmlFor={`ex__form__${name}`} className="ex__form__label">{name}:</label>
          <input type="number"
            id={`ex__form__${name}`}
            name={name}
            value={item.value}
            step="0.01"
            min="0.01"
            onChange={onChange}
            className="ex__form__input gray__text" />
          <span className="ex__form__holder">{item.label}</span>
        </div>
      )
    }
  }

  return (
    <div className="ex___tabs__col">
      <div className="fbw">
        <div className="ex__tabs__text">
          {action} {basePair}
        </div>
        <div className="ex__tabs__text">
          0,00000000 BTC
         </div>
      </div>
      <form className="ex__from"
        onSubmit={onSubmit}>
        {formFields}
        <button type="submit" className={"ex__form__submit " + action}>{action} <span>{basePair}</span> </button>
      </form>

    </div>
  )
}

