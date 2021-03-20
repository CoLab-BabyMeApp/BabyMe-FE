import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import daycareLogo from './assets/daycareLogo.png';
import kidsAtTable from './assets/kidsAtTable.jpg';
import daycareArrowBlue from './assets/daycareArrowBlue.png';
import daycareArrowPink from './assets/daycareArrowPink.png';
import daycareArrowGreen from './assets/daycareArrowGreen.png';
import daycareArrowPurple from './assets/daycareArrowPurple.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BiCurrentLocation } from 'react-icons/bi';
import { HashLink as Link } from "react-router-hash-link";
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    boxShadow: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Landing() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLocationClick = () => {
    window.location("/map");
  }

  return (
    <>
      <div style={{ backgroundColor: '#5db0f0', padding: '20px' }}>
        <h1>
          BabyMe
        </h1>
        <div style={{ textAlign: 'center' }}>
          <p>
            Simplify your search for a daycare that works best for you and your child's needs.
        </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
          >
            Let's get started!
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
              <div className={classes.paper} style={{ textAlign: 'center' }}>
                <h2 id="transition-modal-title">
                  Start Your Search In Your Area
                </h2>
                <p id="transition-modal-description">
                  <Button
                    variant="contained"
                    color="secondary"
                    onLocationClick={handleLocationClick}
                  >
                    <a href="/map" style={{ textDecoration: 'none', color: 'white' }}>
                      <BiCurrentLocation style={{ margin: 'auto', marginRight: '10px' }} />
                      Use my location
                    </a>
                  </Button>
                </p>
              </div>
            </Fade>
          </Modal>
        </div>
      </div >
      <section>
        <p style={{ textAlign: 'center', padding: '10px', marginTop: '30px' }}>
          How does BabyMe work?
        </p>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <img src={daycareLogo}
            alt="stacked toy blocks"
            style={{ width: '200px', height: '200px' }}
          />
          <div>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowBlue} alt="blue arrow" style={{ width: '20%' }} />
              <Paper style={{ boxShadow: 'none' }}>
                Enter your location
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowPink} alt="blue arrow" style={{ width: '20%' }} />
              <Paper style={{ boxShadow: 'none' }}>
                Visit a list of daycares
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowGreen} alt="blue arrow" style={{ width: '20%' }} />
              <Paper style={{ boxShadow: 'none' }}>
                Customize your search
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowPurple} alt="blue arrow" style={{ width: '20%' }} />
              <Paper style={{ boxShadow: 'none' }}>
                Get results!
              </Paper>
            </Grid>
          </div>
        </div>
        <br />
        <img
          src={kidsAtTable}
          alt=""
          style={{ width: '100%', bottom: '0', position: 'fixed' }}
        />
      </section>
    </>
  );
}
