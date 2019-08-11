import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const EmployeeList = ({ employees, remove }) =>  {
    console.log(employees, 'props in employee list');
    return (
        <Card.Group centered>
            {
                employees.map((emp,i) =>  {
                    return(
                    
                    <Card>
                        <Card.Content>
                            <Card.Header>{emp.name}</Card.Header>
                            <Card.Meta>{emp.department}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button inverted color='green'>
                                Edit
                            </Button>
                            <Button inverted color='red' onClick={() => remove(emp._id)}>
                                Delete
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                    )
                })
            }
        </Card.Group>
    )
}

export default EmployeeList;


