import React from 'react';
import './Contact.scss';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      display: 'flex',
      width:' 40%',
      flexDirection: 'column'
    },
    button:{
        width:' 15%',
        margin: theme.spacing(2),
    }
  }));
export default function Contact() {
    const classes = useStyles();
	return (

        <div className='contact'>
            <div className='contact-back'>
            </div>
            <div className='top'>
            <div className={classes.root} >
            <h1>Contact Us</h1>
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Problem" variant="outlined" />
            <TextField id="outlined-basic" label="Feedback" variant="outlined"   multiline rows={7} />
            </div>
            <Button variant="contained" color="primary" className={classes.button}>
             Send
            </Button>
           
            </div> 


        </div>   
	)
}

