import { Button, Container, FormControl, TextField } from '@material-ui/core';
import React, { useState } from 'react';
// import { Container, FormControl, TextField, Button } from '@material-ui/core'

function TodoForm({ addTodo }) {

    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <Container maxWidth="sm">
            <form onSubmit = {handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField
                        label="Let's Do This Today !!!"
                        required={true}
                        style={{backgroundColor: "#FFFFFF", borderRadius: "5px"}}
                        value = {text}
                        onChange = {(event) => setText(event.target.value)}
                    />
                    <Button
                        variant="contained"
                        // color="primary"
                        style={{backgroundColor: "#0FBFCC"}}
                        style = {{marginTop: 5}}
                        type = "submit"
                    >
                        Add Todo
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoForm;