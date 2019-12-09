import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LOGIN_VER } from "../redux/actions/authActions";
import { useLocation, useRouteMatch, Redirect } from "react-router-dom";

function Guard(props) {
  const locations = useLocation();
  useEffect(() => {
    props.loginVerify();
    alert(props.isAuthenticated);
  });

  return (locations !== '/login' && !props.isAuthenticated) && <div>{props.children}</div>;
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  return {
    loginVerify: () => dispatch(LOGIN_VER())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Guard);
