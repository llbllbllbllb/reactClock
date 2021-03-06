import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Bootstrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NameForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = event => {
          console.log(this.state);
          event.preventDefault();
      }



    render() {
        return(
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email" bssize="large">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" bssize="large">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    />
                </Form.Group>
                <Button
                    block
                    bssize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    Login
                </Button>
                </Form>
            </div>

        );
    }
}