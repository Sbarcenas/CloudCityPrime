import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ScanCard } from "./index";
import moment from "moment";
import Modal from "./Modal";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FolderList({ items = [] }) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const showMore = el => {
    setData(el);
    setOpen(!open);
  };
  //const handleClose = () => setOpen(false);

  const classes = useStyles();

  return (
    <Fragment>
      {data && open === true && (
        <Modal open={open} el={data} handleClose={showMore} />
      )}
      <List className={classes.root}>
        {items.map((el, index) => (
          <ScanCard
            onClick={() => showMore(el)}
            image={el.benefit.establishment.logo}
            key={index}
            benefit={el.benefit.name}
            reader={
              el.user_establishment.first_name +
              " " +
              el.user_establishment.last_name
            }
            client={el.user_client.first_name + " " + el.user_client.last_name}
            date={moment(el.date_redeem).format("h:mm:ss a DD-MM-YY")}
          />
        ))}
      </List>
    </Fragment>
  );
}
