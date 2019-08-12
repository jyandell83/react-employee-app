import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';



export default class Logout extends Component {
    clickHandler = (e) =>  {
        e.preventDefault();
        this.props.logOutUser();
    }
    render() {
        return(
            <Button inverted color="red" onClick={this.clickHandler}>Logout</Button>
        )
    }
}