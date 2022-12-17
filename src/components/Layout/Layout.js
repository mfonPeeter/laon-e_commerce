import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import Navigation from './Navigation/Navigation';

const Layout = props => {
  const location = useLocation();

  return (
    <Fragment>
      {location.pathname !== '/auth' && <Navigation />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
