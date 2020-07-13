import React, { useState, useEffect } from 'react';
import './NavBar.scss';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    back:{
    backgroundColor:'#52675c',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    cartButton: {
        marginLeft: theme.spacing(2),
      },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
    MuiDrawerModal:{
      '& div': {
       width:'18%'
    }
  },
  }));
export default function NavBar() {
    const classes = useStyles();
    const [opened,setOpened] = useState(false);
    let { push } = useHistory();
    const toggleDrawer = (open) => (event) => {
      setOpened(open)
    };
    const onRedirect = (name)=> {
     if(name=='Home'){
       push('/');
     }else if(name=='About'){
       push('/about')
     }else if(name=='Contact'){
      push('/contact')
      }else if(name=='Cart'){
        push('/cart')
      }
    };

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.back}>
          <Toolbar>
            <IconButton  onClick={toggleDrawer( true)}edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon  />
            </IconButton>
            <Typography onClick={()=>push('/')} variant="h6" className={classes.title}>
              Mobile World
            </Typography>
            <IconButton onClick={()=>push('/cart')} edge="end" className={classes.cartButton} color="inherit" aria-label="cart">
            <ShoppingCartOutlinedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer className={classes.MuiDrawerModal} open={opened} onClose={toggleDrawer(false)}>
        <div
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List >
          {['Home', 'About', 'Product', 'Contact', 'Cart'].map((text, index) => (
            <ListItem button key={text} onClick={()=>onRedirect(text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </div>
          </Drawer>
      </div>
    );
}

