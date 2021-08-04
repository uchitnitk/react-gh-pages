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
        <Link href="#" color="Primary" underline="none">
          CSV
        </Link>
      </div>
    </TableCell>
  );
};
export default CsvColumn;
