import React, { Component } from 'react';
import RegisterUser from '../RegisterUser';
import LogInUser from '../LogInUser';
import { Grid } from 'semantic-ui-react';


export default class AuthUser extends Component {
    state =  {
        user: {},
        isLogged: false
    }
    registerUser = async (user) => {
    
        try {
          const createUser = await fetch('http://localhost:9000/auth/register',{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if(createUser.status !== 200){
            throw Error('Resource not found')
          }
    
        //   const createUserResponse = await createUser.json();
          this.setState({
            user: user,
            isLogged: !this.state.isLogged
          })
        } catch(err) {
          console.log(err, ' addUser');
          return err;
        }
    }
    logInUser = async (user) => {
        try {
            const foundUser = await fetch('http://localhost:9000/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const foundUserResponse = await foundUser.json();
            console.log(foundUserResponse);

            if(foundUser.status !== 200){
                throw Error('Resource not found')
            }
            this.setState({
                user: user,
                isLogged: !this.state.isLogged
              })
            
        }
        catch(err)  {
            console.log(err, ' error in log in user');
            return err;
        }
    }
    render() {
        console.log(this.state);
        return(
            <div>
            {
            !this.state.isLogged ?
            <Grid centered>
                <Grid.Column>
                    <RegisterUser registerUser={this.registerUser}/>
                </Grid.Column>
                <Grid.Column>
                    <div></div>
                </Grid.Column>
                <Grid.Column>
                    <LogInUser logInUser={this.logInUser}/>
                </Grid.Column>
            </Grid> 
            :
            <div>Hello {this.state.user.username}, log out</div>
            }
            </div>
        );
    }
}