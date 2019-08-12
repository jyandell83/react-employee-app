import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const EmployeeList = ({ employees, remove, showEditModal }) =>  {
    return (
        <Card.Group centered>
            {
                employees.map((emp,id) =>  {
                    return(
                    
                    <Card key={emp._id} link>
                        <Card.Content>
                            <Card.Header>{emp.name}</Card.Header>
                            <Card.Meta>{emp.department}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button inverted color='green' onClick={() => showEditModal(emp)}>
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


