import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LOGIN_VER } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

function Guard(props) {
  let history = useHistory();

  useEffect(() => {
    props
      .loginVerify()
      .then(() =>
        props.isAuthenticated ? history.push("/home") : history.push("/login")
      );
  }, [props.isAuthenticated]);

  if (props.isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.auth.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    loginVerify: () => dispatch(LOGIN_VER())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Guard);
