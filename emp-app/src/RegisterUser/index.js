import React, { Component } from 'react';
import { Button, Header, Modal, Form, Input } from 'semantic-ui-react';

export default class RegisterUser extends Component {
    state = {
        username: '',
        password: '',
        admin: false
    }
    updateUser = (e)  =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) =>  {
        e.preventDefault();
        console.log(this.state, 'state in submit handler register user');
        this.props.registerUser(this.state);
    }
    render() {
        return(
            <Modal trigger={<Button color="green">Register</Button>}>
                <Modal.Header>Register</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                <Header>Choose User Name and Password</Header>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <Input placeholder='Name' type="text" name="username" onChange={this.updateUser}>
                            <input />
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Password' type="text" name="password" onChange={this.updateUser}>
                            <input />
                        </Input>
                    </Form.Field>
                    <Button inverted color="green" type="submit">
                        Register
                    </Button>
                </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}