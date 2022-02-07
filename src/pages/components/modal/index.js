import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Fade, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "40%",
    height: "50%",
    display: "flex",
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],

  },
}));

  function ModalDilog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="contained" name={'Home'} style={{ backgroundColor:"#ffffff", marginRight:"10px"}}>
          Home
        </Button>
        <Button type="button" onClick={handleOpen} data-tut={'Login'} variant="contained" style={{ backgroundColor:"#ffffff",marginRight:"10px"}}>
          Login
        </Button>
        <Button variant="contained" data-tut={'Registre-se'} style={{ backgroundColor:"#ffffff"}}>
          Registre-se
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Faça seu login</h2>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

  export default ModalDilog

