import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Divider from '@material-ui/core/Divider';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import daycaresData from './data/daycaresData';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  alert: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    border: '1px solid'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [filteredDaycares, setFilteredDaycares] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hours, setHours] = useState('');

  const handleChangeDropdown = (e) => {
    setHours(e.target.value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChangeDistance = (e) => {
    console.log(e.target.value, 'distance');
  }

  const handleChange = (e) => {
    console.log(e.target.value, 'hello');

    setValue(e.target.value);
    let sortedDaycares = [];

    daycaresData.map((daycare) => {
      if (e.target.value === null) {
        alert('Please make a selection.')
      } else if (daycare.infant === true && e.target.value === 'infant') {
        sortedDaycares.push(daycare)
      } else if (daycare.toddler === true && e.target.value === 'toddler') {
        sortedDaycares.push(daycare)
      } else if (daycare.child === true && e.target.value === 'child') {
        sortedDaycares.push(daycare)
      }
      console.log(daycare, sortedDaycares, 'filter');
    })
  }

  return (
    <>
      <FormControl component="fieldset" style={{ padding: '10px', marginTop: '10px' }}>
        <FormLabel component="legend" style={{ fontWeight: 'bold' }}>
          Age Range (years)
        </FormLabel>
        <RadioGroup aria-label="age" name="age" value={value} onChange={handleChange} style={{ padding: '2px' }}>
          <FormControlLabel
            value="infant"
            control={<Radio />}
            label="0 -1 years"
            style={{ padding: '2px' }}
          />
          <FormControlLabel
            value="toddler"
            control={<Radio />}
            label="2 - 3 years"
            style={{ padding: '2px' }}
          />
          <FormControlLabel
            value="child"
            control={<Radio />}
            label="3 - 4 years"
            style={{ padding: '2px' }}
          />
        </RadioGroup>
        <Divider
          style={{ margin: '10px', marginBottom: '20px' }}
        />
        {/* <FormLabel component="legend" style={{ fontWeight: 'bold' }}>
          Distance (search within)
        </FormLabel>
        <RadioGroup aria-label="hours" name="hours" value={value} onChange={handleChangeDistance} style={{ padding: '2px' }}>
          <FormControlLabel
            value={value}
            control={<Radio />}
            label="5 miles"
            style={{ padding: '2px' }}
          />
          <FormControlLabel
            value={value}
            control={<Radio />}
            label="10 miles"
            style={{ padding: '2px' }}
          />
          <FormControlLabel
            value={value}
            control={<Radio />}
            label="15 miles"
            style={{ padding: '2px' }}
          />
          <FormControlLabel
            value="child"
            control={<Radio />}
            label="20 miles"
            style={{ padding: '2px' }}
          />
        </RadioGroup>
        <Divider
          style={{ margin: '10px', marginBottom: '20px' }}
        />
        <FormLabel component="legend" style={{ fontWeight: 'bold' }}>
          Price Range
        </FormLabel>
        <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'row', padding: '10px', flexWrap: 'wrap' }}>
          <div style={{ flexDirection: 'row' }}>
            $
          <TextField
              id="filled-basic"
              variant="filled"
              style={{ padding: '5px' }}
            />
          min
          </div>
          <br />
          <div style={{ flexDirection: 'row' }}>
            $
          <TextField
              id="filled-basic"
              variant="filled"
              style={{ padding: '5px' }}
            />
          max
          </div>
        </form> */}
        {/* <Divider
          style={{ margin: '10px', marginBottom: '20px' }}
        /> */}
      </FormControl>
      <div>
        <div style={{ textAlign: 'center' }}>
          <Button
            aria-describedby={id}
            variant="contained"
            color="secondary"
            onClick={handleClick}
          >
            Filter Daycares
        </Button>
        </div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
            <Menu daycares={filteredDaycares} />
          </Typography>
        </Popover>
      </div>
    </>
  );
}
