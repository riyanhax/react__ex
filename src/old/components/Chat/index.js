import React from "react";
import Websocket from 'react-websocket';

export default class Chat extends React.Component{
     ws = new WebSocket('ws://localhost:8080/api/ranger/v2?stream=usdeth')
    state ={
        msg:{}
    }
    clicked(e){
        e.preventDefault();
        let outgoingMessage = {
            jwt:"123",
            market: 'ethusd',
            side: "buy",
            volume: 3,
            price: 2
          }
          let data =JSON.stringify(outgoingMessage)
            this.ws.send(data);
      
    }

    componentDidMount() {
        
        // this.ws.onopen = () => {
        //     console.log(
        //       'Connection to Ranger at has been established'
        //     )
        
        // }
        //   this.ws.onmessage = evt => {
        //     // listen to data sent from the websocket server
        //     const message = JSON.parse(evt.data)
        //      this.setState({msg: message})
            
        //   }
        //   this.ws.onclose = e => {
        //     console.log("closed");
        //     this.ws.onerror = err => {
        //     console.error(
        //       "Socket encountered error: ",
        //       err.message,
        //       "Closing socket"
        //     );
        //   }
        // }
      }
    render(){
        
        return (
                <>
                    <div className="chat__col">
                    <div className="chat__title">
                        CHAT
                    </div>
                        <div className="chat__text m__gray">
                        <span className="chat__text__name gray__text">Admin1:</span>
                            Guys, please make sure everyone sent me test report last week.
                        </div>
                    </div>
                    <form className="chat__form">
                        <div className="facjc">
                            {/* <input type="text"  name="mes" value=""  className="chat__form__input" /> */}
                            <button type="submit"
                        
                             onClick ={(e)=> this.clicked(e)}
                             className="chat__form__submit mint" >Send</button>
                        </div>
                    </form>
              
                    
                </>
        )
    }
}

