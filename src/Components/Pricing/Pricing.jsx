import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Modal from "@material-ui/core/Modal";
import Price from "../Price/Price";
import logo from "../../images/Price.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  image: {
    padding: "10px",
    height: "23px",
    width: "23px",
  },
  button: {
    padding: "0",
    backgroundColor: "white",
    border: "none",
    color: "#3f51b5",
    fontSize: "14px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const Pricing = (props) => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <TableCell key={props.key} align={props.align}>
      <div className={classes.root}>
        <img src={logo} alt="logo" className={classes.image} />
        <button onClick={handleOpen} className={classes.button}>
          View Pricing
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Price row={props.row} />
      </Modal>
    </TableCell>
  );
};

export default Pricing;
