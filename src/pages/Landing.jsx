import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import clipartWoman from '../assets/clipartWoman.png';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaSearchLocation } from 'react-icons/fa';
import '../app/App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: '#E0436B',
    fontFamily: 'Righteous, cursive',
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: '45px',
    letterHeight: '45px',
    marginLeft: '20px',
  },
  subTitle: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#F0C933',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
      margin: '25px 0 25px 0',
      padding: '10px 0 10px 0',
    }
  },
  messageBox: {
    boxShadow: 'none',
    textAlign: 'center',
    textAlign: 'center',
    fontFamily: 'Average Sans, sans-serif',
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '5px',
  },
  mainContainer: {
    textAlign: 'center',
    marginTop: '30px',
    fontFamily: 'Righteous, cursive',
    fontSize: '24px',
    lineHeight: '30px',
    color: '#E0436B',
  },
  infoContainer: {
    display: 'flex',
    backgroundColor: '#F9F9F9',
    padding: '20px',
    fontFamily: 'Average Sans, sans-serif',
    maxWidth: '500px',
    margin: 'auto',
  },
  infoText: {
    boxShadow: 'none',
    backgroundColor: '#F9F9F9',
    fontSize: '1.25rem',
  },
  infoTextLarge: {
    boxShadow: 'none',
    color: '#0F90D1',
    fontSize: '2rem',
    fontFamily: 'Average Sans, sans-serif',
    backgroundColor: '#F9F9F9',
  },
  yellowLine: {
    backgroundColor: '#F0C933',
    height: '20px',
    width: '100%',
    marginLeft: '5px',
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
  footerContainer: {
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'Average Sans, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    width: '100%',
    padding: '10px',
  },
}));

export default function Landing({ navigation }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [zipCode, setZipCode] = useState('');

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
        <h1 className={classes.title}>
          BabyMe
        </h1>
        <div style={{ textAlign: 'center' }}>
          <p className={classes.subTitle}>
            Now available in the Mobile, Portland, and Seattle areas
          </p>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleOpen}
            style={{ marginTop: '10px' }}
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
              <div className={classes.messageBox}>
                <h2 id="transition-modal-title">
                  Start A Search
                </h2>
                <p style={{ paddingBottom: '10px' }}>
                  {/* Please select your method
                  <br />
                  for finding your location. */}
                  Please enter a zip code
                  <br />
                  or
                  <br />
                  press the location button.
                </p>
                <p id="transition-modal-description">
                  {/* <Button
                    variant="contained"
                    color="secondary"
                    onLocationClick={handleLocationClick}
                  >
                    <a href="/map" style={{ textDecoration: 'none', color: 'white' }}>
                      <BiCurrentLocation style={{ margin: 'auto', marginRight: '10px', fontFamily: 'Nunito, sans-serif' }} />
                      Use my location
                    </a>
                  </Button>
                  <p>Or</p> */}
                  <Button
                    variant="contained"
                    color="secondary"
                    onZipCodeClick={handleZipCodeClick}
                  >
                    <a href="/map" style={{ textDecoration: 'none', color: 'white' }}>
                      <FaSearchLocation style={{ margin: 'auto', marginRight: '10px', fontFamily: 'Nunito, sans-serif' }} />
                      {/* Enter a zip code */}
                      Enter
                    </a>
                  </Button>
                </p>
              </div>
            </Fade>
          </Modal>
        </div>
      </div >
      <main className={classes.mainContainer}>
        <h3>
          How does BabyMe work?
        </h3>
        <section style={{ backgroundColor: '#F9F9F9' }}>
          <div className={classes.infoContainer}>
            <img
              src={clipartWoman}
              alt="pregnant woman"
              style={{ height: '240px', margin: 'auto' }}
            />
            <div style={{ margin: 'auto', textAlign: 'left' }}>
              <Grid>
                <Paper className={classes.infoText}>
                  Enter your location
                </Paper>
              </Grid>
              <br />
              <Grid>
                <Paper className={classes.infoText}>
                  Visit a list of daycares
                </Paper>
              </Grid>
              <br />
              <Grid>
                <Paper className={classes.infoText}>
                  Customize your search
                </Paper>
              </Grid>
              <br />
              <Grid>
                <Paper className={classes.infoTextLarge}>
                  Get results!
                </Paper>
              </Grid>
              <br />
              <div className={classes.yellowLine}></div>
            </div>
          </div>
        </section>
        <section>
          <div style={{ display: 'flex' }}>
            <p className={classes.footerContainer}>
              Simplify your search for a
              daycare that works best for
              you and your child's needs.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
