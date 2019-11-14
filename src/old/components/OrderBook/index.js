import React from "react";
import { PureComponent,Component } from "react"
import { ActionCableConsumer } from 'react-actioncable-provider';
import { ActionCableProvider } from "react-actioncable-provider";
export default class OrderBook extends Component{


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
  handleReceived = message => {
    
    console.log(message)
  }

  render() {


console.log(1)

    // const { text, table, data, loading } = this.props
    // let orderBook
    // if (loading) {
    //   orderBook = <tr></tr>
    // }
    // else {
    //   orderBook = data.map((item) => {
    //     return (
    //       <tr className=""
    //         onMouseEnter={(e) => this.toggleHover(e)}
    //         onMouseLeave={(e) => this.toggleLeave(e)}
    //         key={item.id}
    //       >
    //         <td className={text}> {item.price} </td>
    //         <td className="m__gray">{item.origin_volume} </td>
    //         <td className="m__gray">7.71428520 </td>
    //       </tr>
    //     )
    //   })
    // }
    return (
      
        <ActionCableConsumer
          channel={{ channel: 'MarketsChannel', market: "ethusd" }}
          onReceived={this.handleReceived}
        >
          
          {/* <table className={"ex__table " + table}>
            <tbody>
              {orderBook}
            </tbody>
          </table> */}
        </ActionCableConsumer>
      
    )
  }
}

