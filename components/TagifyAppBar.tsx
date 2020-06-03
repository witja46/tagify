import React, { Props } from 'react';
import { Link, Route } from 'react-router-dom';

import {
    AppBar, createStyles, IconButton, makeStyles, Slide, Tab, Tabs, Theme, Toolbar, Typography,
    useScrollTrigger
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
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
    tabBarItems: {},
  })
);

export const TagifyAppBar = () => {
  const classes = useStyles();

  const routes: Array<string> = ["/home", "/impressum"];

  /**
   * This function maps a given route to itself, if it starts with
   * a route from a given list or else to false.
   * This is needed because of the TabBar, that has Tabs
   * for only some of possible routes of the application.
   *
   * If e.g. the only routes that are defined within the TabBar are
   * "/foo" and "/bar" and the current route is "/" than a error
   * is thrown, that the value "/" is illegal within the TabBar.
   *
   *
   * @param path The current route.
   */
  function mapRoute(path: string): string | boolean {
    return routes
      .map((route) => path.startsWith(route))
      .some((val) => val === true)
      ? path
      : false;
  }

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
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <MenuIcon />
    </IconButton>
  );

  const Title = () => (
    <Typography
      variant="h5"
      className={classes.title}
      component={Link}
      to={"/"}
    >
      Tagify
    </Typography>
  );

  const TabBar = () => (
    <Tabs
      value={mapRoute(location.pathname)}
      className={classes.tabBar}
      centered={true}
    >
      <Tab
        icon={<HomeIcon />}
        value="/home"
        component={Link}
        to={"/home"}
        className={classes.tabBarItems}
      />
      <Tab
        label="§"
        value="/impressum"
        component={Link}
        to={"/impressum"}
        className={classes.tabBarItems}
      />
    </Tabs>
  );

  const LoginButton = () => (
    <IconButton color="inherit">
      <PersonIcon />
    </IconButton>
  );

  return (
    <Route
      path="/"
      render={() => (
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <MenuButton />
              <Title />
              <TabBar />
              <LoginButton />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      )}
    />
  );
};
