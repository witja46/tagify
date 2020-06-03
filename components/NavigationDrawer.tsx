import React, { Props } from 'react';

import { SwipeableDrawer } from '@material-ui/core';

export const NavigationDrawer = (props: Props) => {
  const { anchor, state, toggle } = props;

  return (
    <>
      <SwipeableDrawer
        anchor={anchor}
        open={state}
        onClose={toggle(false)}
        onOpen={toggle(true)}
      ></SwipeableDrawer>
    </>
  );
};
