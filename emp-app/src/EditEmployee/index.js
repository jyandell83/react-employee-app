import React from 'react';
import { Button, Form } from 'semantic-ui-react'



const EditEmployee = ({ employee })  =>  {
    const dateStr = employee.birthDate.substring(0,10);
    return(
        <div>
            <Form>
                    <Form.Field>
                        <label>Name:</label>
                        <input type="text" name="name" value={employee.name} />
                    </Form.Field>
                    <Form.Field>
                        <label>Birth Date:</label>
                        <input type="date" name="birthDate" value={dateStr}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Department:</label>
                        <input type="text" name="department" value={employee.department}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Salary:</label>
                        <input type="text" name="annualSalary" value={employee.annualSalary}/>
                    </Form.Field>
                    <Button type="submit">
                        Submit
                    </Button>
            </Form>
        </div>
    )
}

export default EditEmployee;