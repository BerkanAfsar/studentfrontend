import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Student() {

  const paperStyle = {padding:'50px 20px', width:600,margin:"20px auto"}
  const classes = useStyles();

  const[name,setName]=useState('Berkan')
  const[surname,setSurname]=useState('')

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>

            <h1 style={{color:"blue"}}>Adding Student</h1>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Student Surname" variant="outlined" fullWidth
                    value={surname}
                    onChange={(e)=> setSurname(e.target.value)}/>
            </form>
        </Paper> 
    </Container>
  );
}
