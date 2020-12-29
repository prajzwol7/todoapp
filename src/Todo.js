import { Card, CardContent, Container, IconButton, Typography } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';
import React from 'react';
import './Todo.css'

function Todo({ id, title, checkTodo, isCompleted, deleteTodo}) {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id);
    const todoStyle = isCompleted
        ? { textDecoration:"line-through" }
        : { textDecoration:"none" }
    return (
        <div>
            <Container>
                <Card className="card" variant = "outlined" style = {{marginTop: 35, background: "#22d5e3"}}>
                    <CardContent>
                        <Typography variant="h5" components="h2" style={todoStyle}>
                            <IconButton onClick={markComplete}>
                                <Check style={{color: "black"}}/>
                            </IconButton>
                            {title}
                            <IconButton onClick={delTodo} style={{float: "right"}}>
                                <Delete style = {{color: "black"}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Todo;