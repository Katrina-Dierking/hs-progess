import React, { useState, useEffect } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import axios from 'axios'
const Assignments = () => {

    const [assignments, setAssignments] = useState([])
    const deleteHandler = (id) => {
        if(window.confirm('Are you sure you want to delete this assignment? This is permanent and cannot be reversed')){
            
        }
    }

    const fetchAssignments = async () => {
        const {data} = await axios.get('http://localhost:4000/api/assignments')

        setAssignments(data)
    };

    console.log('assignments:', assignments)

    useEffect (()=> {
        fetchAssignments();
    }, [])
    return (
      <>
        <Link to="createAssignment">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="med">
            Create New Assignment
          </Button>
        </Link>


        {assignments.map((assignment) => (
        <Accordion defaultActiveKey={["0"]} key={assignment._id} >
        
            <Accordion.Item eventKey='0'>
            
                <Card style={{ margin: 10 }}>
        
                
                <Card.Header style={{ display: "flex" }}>
                <span
                    style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                    }}
                >
            
                    <Accordion.Button as={Card.Text} variant="link">
                    
                    {assignment.title} 
                    </Accordion.Button>
                
                </span>
                <div>
                    <Button href={`/assignment/${assignment._id}`}>Edit</Button>
                    <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(assignment._id)}
                    >
                    Delete
                    </Button>
                </div>
                </Card.Header>
            

                    <Accordion.Collapse eventKey='0'>
                    
                    <Card.Body>
                    <h4>
                        <Badge bg="success">Category: {assignment.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                        <p>{assignment.content}</p>
                        <footer className="blockquote-footer">
                        Created on - date 
                        </footer>
                    </blockquote>
                    </Card.Body>
                    </Accordion.Collapse>
                
                
                </Card>
            </Accordion.Item>
        
      
        </Accordion>
        ))}
      </>
    );
    }
        

export default Assignments

