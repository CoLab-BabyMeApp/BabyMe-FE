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
  }
}));

export default function Landing() {

  const classes = useStyles();

  return (
    // <div className={classes.root} style={{ fontFamily: 'Roboto, sans-serif', letterSpacing: '0.1rem' }}>
    //   <Grid container spacing={3}>
    //     <Grid item xs={12}>
    //       <Paper className={classes.paper} style={{ display: 'flex', float: 'left', justifyContent: 'center', alignItems: 'center' }}>
    //         <img src={daycareLogo} alt="toy blocks" style={{ width: '200px' }} />
    //         <p style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
    //           BabyMe
    //         </p>
    //       </Paper>
    //       <Button className="landing-button" color="default" style={{ float: 'right' }}>
    //         Let's get started!
    //       </Button>
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <Paper className={classes.paper}>
    //         <img src={kidsAtTable} alt="toy blocks" style={{ width: '100%', margin: 'auto' }} />
    //       </Paper>
    //     </Grid>
    //     {/* <Grid item xs={12} sm={6}>
    //       <Paper className={classes.paper}>
    //         <img src={twoGirls} alt="two girls drawing" style={{ width: '100%', margin: 'auto' }} />
    //       </Paper>
    //     </Grid> */}
    //     <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
    //       <img src={daycareArrowBlue} alt="blue arrow" style={{ width: '20%' }} />
    //       <Paper className={classes.paper}>
    //         Enter your location
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
    //       <img src={daycareArrowPink} alt="blue arrow" style={{ width: '20%' }} />
    //       <Paper className={classes.paper}>
    //         Visit a list of daycares
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
    //       <img src={daycareArrowGreen} alt="blue arrow" style={{ width: '20%' }} />
    //       <Paper className={classes.paper}>
    //         Customize your search
    //       </Paper>
    //     </Grid>
    //     <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
    //       <img src={daycareArrowPurple} alt="blue arrow" style={{ width: '20%' }} />
    //       <Paper className={classes.paper}>
    //         Get results!
    //       </Paper>
    //     </Grid>
    //   </Grid>
    // </div >


    <>
      <div style={{ backgroundColor: '#5db0f0', padding: '20px' }}>
        <h1>
          BabyMe
        </h1>
        <div style={{ textAlign: 'center' }}>
          <p>
            Simplify your search for a daycare that works best for you and your child's needs.
        </p>
          <a href="/map" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
            >

              Let's get started!
          </Button>
          </a>
        </div>
      </div>
      <section>
        <p style={{ textAlign: 'center', padding: '10px', marginTop: '30px' }}>
          How does BabyMe work?
        </p>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <img src={daycareLogo}
            alt="stacked toy blocks"
            style={{ width: '200px' }}
          />
          <div>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowBlue} alt="blue arrow" style={{ width: '20%' }} />
              <Paper className={classes.paper}>
                Enter your location
          </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowPink} alt="blue arrow" style={{ width: '20%' }} />
              <Paper className={classes.paper}>
                Visit a list of daycares
          </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowGreen} alt="blue arrow" style={{ width: '20%' }} />
              <Paper className={classes.paper}>
                Customize your search
          </Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ textAlign: 'center' }}>
              <img src={daycareArrowPurple} alt="blue arrow" style={{ width: '20%' }} />
              <Paper className={classes.paper}>
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
