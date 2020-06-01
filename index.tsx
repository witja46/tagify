import React from "react";
import ReactDOM from "react-dom";
import {
  CssBaseline,
  createMuiTheme,
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar
} from "@material-ui/core";
import {
  ThemeProvider,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles";
import { Impressum } from "./components/Impressum";
import { red, grey, blue } from "@material-ui/core/colors";
import MenuIcon from '@material-ui/icons/Menu';

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

enum RenderPage {
  LIST,
  ADD,
  EDIT,
  IMPRESSUM
}

function App() {
  const classes = useStyles(myTheme);

  const [renderPage, setRenderPage] = React.useState<RenderPage>(
    RenderPage.IMPRESSUM
  );

  function Content() {
    switch (renderPage) {
      case RenderPage.LIST:
        return null;
      case RenderPage.ADD:
        return null;
      case RenderPage.EDIT:
        return null;
      case RenderPage.IMPRESSUM:
        return <Impressum />
      default:
        console.error("Default case reached");
        return null;
    }
  }

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <div className={classes.appBar} >
          <AppBar position="static" >
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
        </div>
        <main className={classes.main}>
          <Content />
        </main>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
