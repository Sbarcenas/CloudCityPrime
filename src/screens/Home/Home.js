import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Main from "../../layouts/Main";
import { Table } from "../../components/shared";
import TextField from "@material-ui/core/TextField";
import { LOGO_IMG } from "../../assets/images";
import { connect } from "react-redux";
import { GET_BENEFIT } from "../../redux/actions/benefitAction";
import { colors } from "../../utils/theme";

export function Copyright({textColor}) {
  return (
    <Typography variant="body2" style={{color:textColor}}  align="center">
      {"Copyright © "}
      <Link color={textColor} style={{color:textColor}} href="https://material-ui.com/">
        E-me digital agency
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    overflow: "scroll",
    height: 400,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  imageContainer: {
    width: "20%",
    height: "20%",
    alignSelf: "center"
  },
  backPrime: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: colors.main
  },
  textButton: {
    color: colors.white
  }
}));

const Home = props => {
  const classes = useStyles();

  useEffect(() => {
    props.getBenefits();
  });

  return (
    <Main>
      <CssBaseline />
      <AppBar className={classes.backPrime} position="relative">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img className={classes.imageContainer} src={LOGO_IMG} alt={'Alt'}/>
        </div>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="codigo"
                  label="Código"
                  name="email"
                  autoComplete="benefit"
                  autoFocus
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.backPrime}
                >
                  Canjear beneficio
                </Button>
              </form>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <Table items={props.benefits.benefits} />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <Table items={props.benefits.benefits} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          City Prime
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          ¡Vive en estado City!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </Main>
  );
};

function mapStateToProps(state) {
  const { benefit } = state;
  return {
    benefits: benefit
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getBenefits: () => dispatch(GET_BENEFIT())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
