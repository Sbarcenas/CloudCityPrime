import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ScanCard } from "./index";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FolderList({ items = [] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((el, index) => (
        <ScanCard
          key={index}
          benefit={"2x1 BBC"}
          reader={"Ezequiel Bahoque"}
          client={"Sebastian Barcenas"}
          date={"27 en 2019"}
        />
      ))}
    </List>
  );
}
