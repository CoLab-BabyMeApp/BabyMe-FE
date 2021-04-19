import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import girlWithBlocks from './assets/girlWithBlocks.png';
import clipartWoman from './assets/clipartWoman.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaSearchLocation } from 'react-icons/fa';
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
    window.location('/map');
  }

  const handleZipCodeClick = () => {
    window.location('/map');
  }

  return (
    <>
      <div>
        <h1 style={{ color: '#E0436B', fontFamily: 'Righteous, cursive', fontSize: '36px', fontWeight: '400', lineHeight: '45px', letterHeight: '45px', marginLeft: '20px' }}>
          BabyMe
        </h1>
        <div style={{ textAlign: 'center' }}>
          <p style={{ padding: '5px', width: '100%', backgroundColor: '#F0C933', fontFamily: 'Nunito, sans-serif', fontSize: '18px' }}>
            Now available in the Mobile, Portland, and Seattle areas
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            style={{ marginTop: '20px' }}
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
              <div className={classes.paper} style={{ textAlign: 'center', fontFamily: 'Average Sans, sans-serif' }}>
                <h2 id="transition-modal-title">
                  Start A Search
                </h2>
                <p style={{ paddingBottom: '10px' }}>
                  Please select your method
                  <br />
                  for finding your location.
                </p>
                <p id="transition-modal-description">
                  <Button
                    variant="contained"
                    color="secondary"
                    onLocationClick={handleLocationClick}
                  >
                    <a href="/map" style={{ textDecoration: 'none', color: 'white' }}>
                      <BiCurrentLocation style={{ margin: 'auto', marginRight: '10px', fontFamily: 'Nunito, sans-serif' }} />
                      Use my location
                    </a>
                  </Button>
                  <p>Or</p>
                  <Button
                    variant="contained"
                    color="secondary"
                    onZipCodeClick={handleZipCodeClick}
                  >
                    <a href="/map" style={{ textDecoration: 'none', color: 'white' }}>
                      <FaSearchLocation style={{ margin: 'auto', marginRight: '10px', fontFamily: 'Nunito, sans-serif' }} />
                      Enter a zip code
                    </a>
                  </Button>
                </p>
              </div>
            </Fade>
          </Modal>
        </div>
      </div >
      <main>
        <p style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Righteous, cursive', fontSize: '24px', lineHeight: '30px', color: '#E0436B' }}>
          How does BabyMe work?
        </p>
        <section style={{ backgroundColor: '#F9F9F9' }}>
          <div style={{ display: 'flex', backgroundColor: '#F9F9F9', padding: '20px', fontFamily: 'Average Sans, sans-serif', maxWidth: '500px', margin: 'auto' }}>
            <img
              src={clipartWoman}
              alt="pregnant woman"
              style={{ height: '240px', margin: 'auto' }}
            />
            <div style={{ margin: 'auto' }}>
              <Grid style={{ textAlign: 'left' }}>
                <Paper style={{ boxShadow: 'none', backgroundColor: '#F9F9F9' }}>
                  Enter your location
              </Paper>
              </Grid>
              <br />
              <Grid style={{ textAlign: 'left' }}>
                <Paper style={{ boxShadow: 'none', backgroundColor: '#F9F9F9' }}>
                  Visit a list of daycares
              </Paper>
              </Grid>
              <br />
              <Grid style={{ textAlign: 'left' }}>
                <Paper style={{ boxShadow: 'none', backgroundColor: '#F9F9F9' }}>
                  Customize your search
              </Paper>
              </Grid>
              <br />
              <Grid style={{ textAlign: 'left' }}>
                <Paper style={{ boxShadow: 'none', color: '#0F90D1', fontFamily: 'Average Sans, sans-serif', fontSize: '36px', lineHeight: '47px', backgroundColor: '#F9F9F9' }}>
                  Get results!
              </Paper>
              </Grid>
              <br />
              <div style={{ backgroundColor: '#F0C933', height: '20px', width: '100%', marginLeft: '5px' }}></div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src={girlWithBlocks}
              alt="Kids playing at table"
              style={{ width: '100%', bottom: '0' }}
            />
            <p style={{ display: 'flex', position: 'absolute', paddingLeft: '5px', color: 'white', fontFamily: 'Average Sans, sans-serif', lineHeight: '24px', backgroundColor: 'rgba(0, 0, 0, .3)', width: '100%', padding: '10px', marginBottom: '0px', bottom: '0px' }}>
              Simplify your search for a
            <br />
            daycare that works best for
            <br />
            you & your child's needs.
          </p>
          </div>
        </section>
      </main>
    </>
  );
}
