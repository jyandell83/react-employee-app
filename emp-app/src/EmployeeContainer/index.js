import React, { Component } from 'react';
import CreateEmployee from '../CreateEmployee';


class EmployeeContainer extends Component {
    render() {
        return(
            <div>
                <h2>This is the Employee Container</h2>
                <CreateEmployee />
            </div>
        );
    }
}

export default EmployeeContainer;