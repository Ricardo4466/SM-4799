import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuLateral from "../components/Menu";
import {Grid, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ModalDilog from '../components/modal';




export default function Home({
  setIsTourOpen,
  toggleShowMore
}) {
  return (
    <>
      <CssBaseline />
        <AppBar position="absolute">
          <Toolbar >
            <MenuLateral setIsTourOpen={setIsTourOpen} toggleShowMore={toggleShowMore}/>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              >
              <div style={{ margin:"10px", paddingTop:"10px"}}>
                <ModalDilog />
              </div>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{display:'flex', minHeight: '100vh'}}
        > 

          <Grid maxWidth="sm" data-tut={'Teste'} style={{ display:'flex', height: "inherit", paddingTop: "100px"}}>
            <h1> TESTE </h1>
          </Grid>
      </Grid> 
    </>
  );
}
