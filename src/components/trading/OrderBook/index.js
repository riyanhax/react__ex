import React, { PureComponent } from "react";


export default class OrderBook extends React.Component {


  toggleHover(e) {
    e.currentTarget.style.background = this.props.colorHover;
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = this.props.colorHover;
      el = el[this.props.sibling];
    }
  }
  toggleLeave(e) {
    e.currentTarget.style.background = '';
    let el = e.currentTarget[this.props.sibling];
    while (el) {
      el.style.background = '';
      el = el[this.props.sibling];
    }
  }

  render() {

    const { text, table, data, loading } = this.props;
    
    let orderBook=""
    if (loading) {
      orderBook = <tr></tr>
    }
    else {
      orderBook = data.map((item, index) => {
        return (
          <tr className=""
            onMouseEnter={(e) => this.toggleHover(e)}
            onMouseLeave={(e) => this.toggleLeave(e)}
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
}

