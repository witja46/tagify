import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import {
  CssBaseline,
  createMuiTheme,
  Container,
  Box,
} from "@material-ui/core";
import {
  ThemeProvider,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { TagifyAppBar } from "./components/TagifyAppBar";
import { Welcome } from "./components/Welcome";
import { UserBoard } from "./components/UserBoard";
import { Impressum } from "./components/Impressum";

const myTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: blue,
  }
});

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      overflow: "auto",
      flexGrow: 1
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
