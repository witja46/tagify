import React, { Props } from 'react';

import { Button, SwipeableDrawer, TextField, Theme } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

export const UserProfileDrawer = (props: Props) => {
  const { anchor, state, toggle } = props;
  const classes = useStyles();

  return (
    <React.Fragment key={anchor}>
      <SwipeableDrawer
        anchor={anchor}
        open={state}
        onClose={toggle(false)}
        onOpen={toggle(true)}
      >
        <div className={classes.content}>
          <AccountCircleIcon style={{ fontSize: 80 }} />
          <img src="https://loremflickr.com/320/240?lock=1" />
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              required
              id="username-input"
              label="Username"
              defaultValue=""
            />
            <TextField
              required
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button>Login</Button>
          </form>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
