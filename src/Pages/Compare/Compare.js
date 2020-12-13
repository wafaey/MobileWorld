import React, { useState } from 'react';
import './Compare.scss';
//import {useDispatch, useSelector} from 'react-redux';
//import { useHistory } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import index from '../../Actions/index'
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function Compare() {
   // const dispatch = useDispatch();
   // let { push } = useHistory();
   // const list = useSelector( state => ({ list: state.compareList}) ); 
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      setPersonName(event.target.value);
    };
  
const classes = useStyles();
const theme = useTheme();
	return (
            <div className='compare'>
            <h1>Compare Our Models</h1>
            <div className='models'>
            <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Model</em>;
            }

            return selected.join(', ');
          }}
        //   MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Model</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

            </div>
            </div>
	)
}

