import React, { Component } from 'react';

class CreateEmployee extends Component {
    state = {
        name: '',
        birthDate: '',
        department: '',
        salary: ''
    }
    updateEmployee = (e)  =>  {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <h3>Add another drone</h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.updateEmployee}/>
                    </label><br />
                    <label>
                        Birth Date:
                        <input type="date" name="birthDate" onChange={this.updateEmployee}/>
                    </label><br />
                    <label>
                        Department:
                        <input type="text" name="department" onChange={this.updateEmployee}/>
                    </label><br />
                    <label>
                        Salary:
                        <input type="text" name="annualSalary" onChange={this.updateEmployee}/>
                    </label><br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateEmployee;