import React from "react";


export default (props) => {
  const { text, table, data, loading, colorHover, sibling } = props;
  let toggleHover = (e) => {
    e.currentTarget.style.background = colorHover;
    let el = e.currentTarget[sibling];
    while (el) {
      el.style.background = colorHover;
      el = el[sibling];
    }
  }
  let toggleLeave = (e) => {
    e.currentTarget.style.background = '';
    let el = e.currentTarget[sibling];
    while (el) {
      el.style.background = '';
      el = el[sibling];
    }
  }



  let orderBook = ""
  if (loading) {
    orderBook = <tr></tr>
  }
  else {
    orderBook = data.map((item, index) => {
      return (
        <tr className=""
          onMouseEnter={(e) => toggleHover(e)}
          onMouseLeave={(e) => toggleLeave(e)}
          key={index}
        >
          <td className={text}> {item.price} </td>
          <td className="m__gray">{item.origin_volume} </td>
          <td className="m__gray">{item.locked}</td>
        </tr>
      )
    })
  }
  return (

    <table className={"ex__table " + table}>
      <tbody>
        {orderBook}
      </tbody>
    </table>
  )
}


