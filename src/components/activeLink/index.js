import * as styles from "./styles.module.scss";
import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import PropTypes from "prop-types";

const ActiveLink = (props) => {
  const { to, scroll, children, className, activeClassName } = props;

  return (
    <div className={classNames(styles.linkContainer)}>
      {scroll ? (
        <a
          href="#"
          className={classNames(styles.link, className)}
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById(scroll)
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {children}
        </a>
      ) : (
        <Link
          to={to}
          className={classNames(styles.link, className)}
          activeClassName={classNames(styles.active, activeClassName)}
        >
          {children}
        </Link>
      )}
    </div>
  );
};

ActiveLink.propTypes = {
  to: PropTypes.string,
};

ActiveLink.defaultProps = {
  scroll: null,
  to: null,
};

export default ActiveLink;
