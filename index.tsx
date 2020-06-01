import React from "react";
import ReactDOM from "react-dom";
import {
  CssBaseline,
  createMuiTheme,
  AppBar,
  Tabs,
  Tab, Collapse
} from "@material-ui/core";
import {
  ThemeProvider,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core/styles"; //IMPORTANT: do not use @material-ui/styles !!
import { Impressum, ImpressumToggle } from "./Impressum";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import { red, grey } from "@material-ui/core/colors";

const myTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: red,
    secondary: grey
  }
});

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      justifyContent: "center",
      overflow: "auto",
    },
    spacerDiv: {
      height: "100%",
    }
  })
);

enum RenderPage {
  LIST,
  ADD,
  EDIT
}

function App() {
  const classes = useStyles(myTheme);

  const [renderPage, setRenderPage] = React.useState<RenderPage>(
    RenderPage.ADD
  );
  const [impressum, setImpressum] = React.useState<boolean>(false);

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: RenderPage
  ) => {
    setRenderPage(newValue);
  };

  const handleImpressum = () => setImpressum((prevState => !prevState));

  function Content() {
    switch (renderPage) {
      case RenderPage.LIST:
        return null;
      case RenderPage.ADD:
        return null;
      case RenderPage.EDIT:
        return null;
      default:
        console.error("Default case reached");
        return null;
    }
  }

  return (
    <div>
      <ThemeProvider theme={myTheme}>
        <Collapse in={!impressum}>
          <CssBaseline />
          <main className={classes.main}>
            <Content />
          </main>
        </Collapse>
        {ImpressumToggle(handleImpressum)}
        <Collapse in={impressum}>
          <Impressum />
        </Collapse>
      </ThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
