import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import CameraIcon from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles(theme => ({
  root: {
    cursor: "pointer",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 3,
    boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.75)"
  },
  cardRoot: {
    display: "flex",
    justifyContent: "space-between"
  },
  text: {
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: 400,
    fontSize: 14
  },
  container: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

function ScanCard({ client, benefit, reader, date }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardRoot}>
        <ListItemAvatar>
          <Avatar>
            <CameraIcon />
          </Avatar>
        </ListItemAvatar>
        <div>
          <div>{benefit} </div>
          <div>{`Cliente: ${client}`}</div>
          <div className={classes.text}>Leido por: {reader}</div>
        </div>
      </div>

      <div>{date}</div>
    </div>
  );
}

export default ScanCard;
