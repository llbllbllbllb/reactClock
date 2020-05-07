import React from 'react';


export default class MailBox extends React.Component {


    render (){
        return(
            <div>
                <h1>Hello!</h1>
                {this.props.unreadMessages.length > 0 &&
                    <h2>
                        You have {this.props.unreadMessages.length} unread messages.
                    </h2>
                }
            </div>
        );
    }
}