import React from "react";


export default (props) => {

  const { data, loading } = props;

  let deals
  if (loading) {
    deals = <tr></tr>
  }
  else {
    deals = data.map((item, index) => {
      return (
        <tr key={index}>
          <td className=" gray__text">{item.price} </td>
          <td className=" m__gray text__r">{item.amount}</td>
          <td className=" d__gray text__r">{item.time_of_creation}</td>
        </tr>
      )
    })
  }
  return (
    <div className="table__grid">
      <table className="ex__table gray__table">
        <tbody>
          {deals}
        </tbody>
      </table>
    </div>
  )

}



