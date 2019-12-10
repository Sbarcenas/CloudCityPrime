import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import moment from "moment";
import UserCard from "./cards/UserCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function UserList({ items = [] }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((el, index) => {
        console.log(el);
        return (
          <UserCard
            key={index}
            benefit={el.user.first_name + " " + el.user.last_name}
            reader={
              el.user_establishment.first_name +
              " " +
              el.user_establishment.last_name
            }
            date={moment(el.redeem).format("h:mm:ss a DD-MM-YY")}
          />
        );
      })}
    </List>
  );
}
