import { Fragment } from 'react';

import Navigation from './Navigation/Navigation';

const Layout = props => {
  return (
    <Fragment>
      <Navigation totalItems={props.totalItems} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
