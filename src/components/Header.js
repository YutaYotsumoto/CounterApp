import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  manuBar: {
    backgroundColor: 'Black',
    color: 'White',
  },
  Toolbar: {
    margin: '0 auto',
    maxWidth: 300,
    width: '100%',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.manuBar}>
        <Toolbar className={classes.Toolbar}></Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
