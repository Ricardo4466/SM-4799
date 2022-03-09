import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Fade, Modal, Grid, TextField,  } from '@material-ui/core';

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
    boxShadow: theme.shadows[5],

  },
}));

  function ModalDilog(
    setIsTourOpen,
    toggleShowMore
  ) {
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
        {/* <Button variant="contained" name={'Home'} onClick={setIsTourOpen} style={{ backgroundColor:"#ffffff", marginRight:"10px"}}>
          Tour
        </Button> */}
        <button onClick={setIsTourOpen(true)}>Open</button>
        <Button  onClick={handleOpen} data-tour={"open_modal"}  style={{ backgroundColor:"#ffffff",marginRight:"10px"}}>
          Login
        </Button>
        {/* <Button variant="contained" data-tut={'Registre-se'} style={{ backgroundColor:"#ffffff"}}>
          Registre-se
        </Button> */}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}Home
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          skipMotion
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Grid container spacing={0} style={{ display:'flex', alignContent:'center', padding: 50}}>
              <div data-tut={"Faça o Seu Log-in"}> <b>Faça o Seu Log-in</b> </div>
                <Grid item xs={12}>
                  <TextField
                    
                    style={{width: '100%'}}
                    label="Email"
                  />
                </Grid> 
                <Grid item xs={12}>
                  <TextField
                    style={{width: '100%'}}
                    label="Senha"
                  />
                </Grid>
                <Grid item xs={12}>
                  <div style={{ display: 'flex', marginTop: 10 }}
                  >
                    <div style={{ flex: 1 }}></div>
                    <Button  style={{ background: 'white', color: 'black' }}>Cancelar</Button>
                    <Button  style={{ marginLeft: 5 }} >Entrar</Button>
                  </div>

                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }

  export default ModalDilog

