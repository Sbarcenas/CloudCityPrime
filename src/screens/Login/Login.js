import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { colors } from "../../utils/theme";
import { connect } from "react-redux";
import { LOGIN } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%" // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  imageContainer: {
    width: "30%",
    height: "30%"
  },
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    background: colors.main
  },
  input: {
    color: colors.white
  }
}));

function SignIn(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const [input, setInput] = useState({});
  const [msg, setMsg] = useState(null);

  const handleInputChange = e =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });

  const onSubmit = e => {
    const { email, password } = input;
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    // Attemp to login new user
    try {
      props
        .login(user)
        .then(e => (e.type !== "city.loginFail" ? handleClick() : null));
    } catch (e) {
      console.log(e);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            className={classes.imageContainer}
            src={require("../../assets/images/main_logo.png")}
            alt={"Alt"}
          />

          <form onSubmit={onSubmit} className={classes.form} noValidate>
            <TextField
              InputLabelProps={{
                style: {
                  width: "100%",
                  color: "white"
                }
              }}
              InputProps={{
                className: classes.input
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              InputLabelProps={{
                style: {
                  width: "100%",
                  color: "white"
                }
              }}
              InputProps={{
                className: classes.input
              }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(LOGIN(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
