import React, { Component } from 'react';
import { Button, Header, Modal, Form, Input } from 'semantic-ui-react';

export default class LoginUser extends Component {
    state = {
        username: '',
        password: ''
    }
    updateUser = (e)  =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) =>  {
        e.preventDefault();
        console.log(this.state, 'state in submit handler register user');
        this.props.logInUser(this.state);
    }
    render() {
        return(
            <Modal trigger={<Button color="green">Login</Button>}>
                <Modal.Header>Login</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                <Header>User Name and Password</Header>
                <Form onSubmit={this.submitHandler}>
                    <Form.Field>
                        <Input label='Name: ' placeholder='Name' type="text" name="username" onChange={this.updateUser}>
                            <input />
                        </Input>
                    </Form.Field>
                    <Form.Field>
                        <Input label='Password ' placeholder='Password' type="text" name="password" onChange={this.updateUser}>
                            <input />
                        </Input>
                    </Form.Field>
                    <Button inverted color="green" type="submit">
                        Login
                    </Button>
                </Form>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}