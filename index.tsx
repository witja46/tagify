import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Box, Container, createMuiTheme, CssBaseline } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';

import { Impressum } from './components/Impressum';
import { NavigationDrawer } from './components/NavigationDrawer';
import { TagifyAppBar } from './components/TagifyAppBar';
import { UserBoard } from './components/UserBoard';
import { UserProfileDrawer } from './components/UserProfileDrawer';
import { Welcome } from './components/Welcome';

const myTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
  },
});

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      overflow: "auto",
      flexGrow: 1,
    },
  })
);

export type Anchor = "left" | "right";

function App() {
  const classes = useStyles(myTheme);

  const [drawerState, setDrawerState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <NavigationDrawer
          anchor={"left" as Anchor}
          state={drawerState["left" as Anchor]}
          toggle={toggleDrawer.bind(null, "left" as Anchor)}
        />
        <UserProfileDrawer
          anchor={"right" as Anchor}
          state={drawerState["right" as Anchor]}
          toggle={toggleDrawer.bind(null, "right" as Anchor)}
        />

        <TagifyAppBar
          toggleLeftDrawer={toggleDrawer.bind(null, "left" as Anchor)}
          toggleRightDrawer={toggleDrawer.bind(null, "right" as Anchor)}
        />
        <Container className={classes.main}>
          <Box my={8}>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={UserBoard} />
            <Route path="/impressum" component={Impressum} />
          </Box>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
