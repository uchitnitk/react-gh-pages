import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import logo from "../../images/file.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    padding: "10px",
    height: "25px",
    width: "20px",
  },
});

const CsvColumn = (props) => {
  const classes = useStyles();
  return (
    <TableCell key={props.key} align={props.align}>
      <div className={classes.root}>
        <img src={logo} alt="logo" className={classes.image} />
        <Link
          target="_blank"
          href="https://www.google.com/search?q=csv&oq=csv&aqs=chrome..69i57j0i67i433j0i67l3j0i67i131i433j0i67j0i67i131i433l2.571j0j15&sourceid=chrome&ie=UTF-8"
          color="Primary"
          underline="none"
        >
          CSV
        </Link>
      </div>
    </TableCell>
  );
};
export default CsvColumn;
