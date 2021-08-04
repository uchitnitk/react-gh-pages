import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import logo from "../../images/statistics-report.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    padding: "10px",
    height: "20px",
    width: "20px",
  },
});

const Report = (props) => {
  const classes = useStyles();
  return (
    <TableCell key={props.key} align={props.align}>
      <div className={classes.root}>
        <img src={logo} alt="logo" className={classes.image} />
        <Link
          target="_blank"
          href="https://www.google.com/search?q=report&oq=report&aqs=chrome..69i57j0i67l2j0i512j0i131i433i512l2j69i60j69i61.2375j0j7&sourceid=chrome&ie=UTF-8"
          color="Primary"
          underline="none"
        >
          Report
        </Link>
      </div>
    </TableCell>
  );
};
export default Report;
