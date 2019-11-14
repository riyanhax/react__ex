import React, { PureComponent } from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';

class chatRoom extends PureComponent {
    state = {
        messages: [],
        message: ""
    }

    handleReceived = message => {
        this.setState({
            messages: [
                ...this.state.messages,
                message
            ]
        })
    }

    sendMessage = () => {

        // fetch(`api/v2/peatio/market/orders`, {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(
        //         {
        //             market: 'ethusd',
        //             side: "buy",
        //             volume: 2,
        //             price: 10,
        //         }
        //     ),
        //     headers: {
        //         'Content-type': 'application/json'
        //     },

        // })
        //     .then(response => response.json())
        //     .then((data) => {

        //         //console.log(data)
        //     })
        //     .catch((e) => {
        //         console.log(e)
        //     });
    }

    onChange = e => {
        this.setState({ message: e.target.value })
    }

    render() {
        console.log(this.state.messages)
        return (
            <div>
                <ActionCableConsumer
                    // channel={'RoomChannel'}
                    channel={{ channel: 'MarketsChannel', market: "ethusd" }}
                    onReceived={this.handleReceived}
                />
                <h2>Chat Room 1</h2>
                <h5>Messages</h5>
                <ul>
                    {this.state.messages.map((message) =>
                        <li key={message.id}>{message.body}</li>
                    )}
                </ul>
                <input onChange={this.onChange} type='text' />
                <button onClick={this.sendMessage} type='button'>
                    Send
                </button>
            </div>
        )
    }
}

export default chatRoom