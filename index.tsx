import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Box, Container, createMuiTheme, CssBaseline } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';

import { Impressum } from './components/Impressum';
import { TagifyAppBar } from './components/TagifyAppBar';
import { UserBoard } from './components/UserBoard';
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

function App() {
  const classes = useStyles(myTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <TagifyAppBar />
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

ReactDOM.render(<App />, document.querySelector("#app"));
