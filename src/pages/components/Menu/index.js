import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  box: {
    width: "400px",
    backgroundColor:"#ffffff"
  }
});

export default function MenuLateral({
  setIsTourOpen
}) {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    setIsTourOpen(open)
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Viagens', 'Pacotes', 'Email', 'Pacotes promocionais'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text}  data-tut={text}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Histórico', 'Meus Emails', 'Favoritos'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text}  data-tut={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );



  return (
    <div style={{display: "flex"}}>
      {['left'].map((anchor) => (
        <>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <MenuIcon style={{fontSize: "50px", marginRight:'10vh', }} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>   
          </Grid>
          <Drawer 
          BackdropProps={{ invisible: true }}
          anchor={anchor} 
          open={state[anchor]} 
          onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer> 
        </>
      ))}
    </div>
  );
}

