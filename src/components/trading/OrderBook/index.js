import React from "react";


export default (props) => {

  let toggleHover = (e) => {
    e.currentTarget.style.background = this.props.colorHover;
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = this.props.colorHover;
      el = el[this.props.sibling];
    }
  }
  let toggleLeave = (e) => {
    e.currentTarget.style.background = '';
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = '';
      el = el[this.props.sibling];
    }
  }

  const { text, table, data, loading } = props;

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
          <td className="m__gray">{item.total}</td>
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


