import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
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

function UserCard({ client, benefit, reader, date, onClick }) {
    const classes = useStyles();

    return (
        <div onClick={onClick} className={classes.root}>
            <div className={classes.cardRoot}>
                {/*<ListItemAvatar>
                    <Avatar>
                        <CameraIcon />
                    </Avatar>
                </ListItemAvatar>*/}
                <div>
                    <div>{benefit}</div>
                    <div className={classes.text}>Leido por: {reader}</div>
                </div>
            </div>

            <div>{date}</div>
        </div>
    );
}

export default UserCard;
