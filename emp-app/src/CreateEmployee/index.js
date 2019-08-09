import React, { Component } from 'react';

class CreateEmployee extends Component {
    render() {
        return(
            <div>
                <h3>Add another drone</h3>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                    </label><br />
                    <label>
                        Birth Date:
                        <input type="date" name="birthDate"/>
                    </label><br />
                    <label>
                        Department:
                        <input type="text" name="department"/>
                    </label><br />
                    <label>
                        Salary:
                        <input type="text" name="annualSalary"/>
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