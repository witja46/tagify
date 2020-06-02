import React, { Props, Component, ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import {
  CssBaseline,
  createMuiTheme,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar,
  useScrollTrigger,
  Slide,
  Container,
  Box,
  Tabs,
  Tab
} from "@material-ui/core";
import {
  ThemeProvider,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import { Impressum } from "./components/Impressum";
import { blue } from "@material-ui/core/colors";
import MenuIcon from '@material-ui/icons/Menu';
import { Welcome } from "./components/Welcome";

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
    spacerDiv: {
      height: "100%",
    },
    appBar: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: _theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  })
);


function HideOnScroll(props: Props<ReactNode>) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  const classes = useStyles(myTheme);

  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <HideOnScroll>
            <AppBar >
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Tagify
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </HideOnScroll>
          <Container className={classes.main}>
            <Box my={10}>
              <Route exact path="/" component={Welcome}/>
              <Route path="/impressum" component={Impressum}/>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
