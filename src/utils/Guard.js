import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LOGIN_VER } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { colors } from "./theme";
import AlertCard from "../components/shared/cards/AlertCard";
import { clearErrors } from "../redux/actions/errorActions";
import { CLEAR_MESSAGE } from "../redux/actions/messageActions";

function Guard(props) {
  let history = useHistory();

  useEffect(() => {
    props
      .loginVerify()
      .then(() => {
        props.isAuthenticated ? history.push("/home") : history.push("/login");
      })
      .catch(e => {
        console.log("Login Failed", e);
      });
  }, [props.isAuthenticated]);

  if (props.isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: colors.main
        }}
      >
        <CircularProgress color={"secondary"} />
      </div>
    );
  } else {
    const handleClose = () => {
      props.clearError();
      props.clearMessage();
    };
    return (
      <div>
        {props.error.msg && (
          <AlertCard
            variant="error"
            onClose={handleClose}
            message={props.error.msg}
          />
        )}
        {props.message && (
          <AlertCard
            variant="success"
            onClose={handleClose}
            message={props.message}
          />
        )}
        {props.children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  isLoading: state.auth.isLoading,
  message: state.message.msg
});

const mapDispatchToProps = dispatch => {
  return {
    loginVerify: () => dispatch(LOGIN_VER()),
    clearError: () => dispatch(clearErrors()),
    clearMessage: () => dispatch(CLEAR_MESSAGE())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Guard);
