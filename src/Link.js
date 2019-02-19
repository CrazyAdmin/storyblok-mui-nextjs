/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {string,shape,bool,func} from 'prop-types';
import clsx from 'clsx';
import { withRouter } from 'next/router';
import {NextLink} from '../routes';
import MuiLink from '@material-ui/core/Link';

function NextComposed(props) {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a {...other} />
    </NextLink>
  );
}

NextComposed.propTypes = {
  as: string,
  href: string,
  prefetch: bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const { activeClassName, router, className: classNameProps, naked, ...other } = props;

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} {...other} />;
  }

  return <MuiLink component={NextComposed} className={className} {...other} />;
}

Link.propTypes = {
  activeClassName: string,
  as: string,
  className: string,
  href: string,
  naked: bool,
  onClick: func,
  prefetch: bool,
  router: shape({
    pathname: string.isRequired,
  }).isRequired,
};

Link.defaultProps = {
  activeClassName: 'active',
};

export default withRouter(Link);
