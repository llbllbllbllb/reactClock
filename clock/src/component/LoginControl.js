import React from 'react';

export default class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggedIn: this.props.isLoggedIn};
        // remember to bind the functions!!!
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let greeting;

        if(isLoggedIn){
            button = <button onClick={this.handleLogoutClick}>Logout</button>;
            greeting = <h1>Welcome Back</h1>;
        }
        else{
            button = <button onClick={this.handleLoginClick}>Login</button>;
            greeting = <h1>Please Login</h1>;
        }

        return (
            <div>
                {greeting}
                {button}
            </div>
        );
    }
}