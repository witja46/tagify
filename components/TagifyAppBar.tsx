import React, { Props } from "react"
import { Route, Link } from "react-router-dom"
import { AppBar, Toolbar, IconButton, makeStyles, createStyles, Typography, useScrollTrigger, Slide, Tabs, Tab, Theme } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: _theme.spacing(2),
    },
    title: {
      textDecoration: "none",
      color: "inherit",
    },
    tabBar: {
      flexGrow: 1,
    },
    tabBarItems: {
      
    },
  })
);

export const TagifyAppBar = () => {

  const classes = useStyles();

  const HideOnScroll = (props: Props) => {
    const { children } = props;
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  const MenuButton = () => (
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  );

  const Title = () => (
    <Typography variant="h5" className={classes.title} component={Link} to={"/"}>Tagify</Typography>
  );

  const TabBar = () => (
    <Tabs value={location.pathname} className={classes.tabBar} centered={true}>
      <Tab icon={<HomeIcon/>} value="/home" component={Link} to={"/home"} className={classes.tabBarItems}/>
      <Tab label="Impressum" value="/impressum" component={Link} to={"/impressum"} className={classes.tabBarItems}/>
    </Tabs>
  );

  const LoginButton = () => (
    <IconButton color="inherit">
      <PersonIcon/>
    </IconButton>
  );

  return (
    <Route path="/" render={() => 
      <HideOnScroll>
        <AppBar >
          <Toolbar>
            <MenuButton/>
            <Title/>
            <TabBar/>
            <LoginButton/>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    }/>
  )
}