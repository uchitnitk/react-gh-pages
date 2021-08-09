import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Price = (props) => {
  const rand = () => {
    return Math.round(Math.random() * 20) - 10;
  };

  const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    flexContainer: {
      display: "flex",
      margin: "20px 0px",
    },
    image: {
      flex: "1",
      maxWidth: "200px",
      maxHeight: "200px",
      width: "auto",
      height: "auto",
      paddingRight: "10px",
      marginBottom: "50px",
    },
    info: {
      fontSize: "20px",
    },
    duration: {
      flex: "1",
      width: "50%",
      alignContent: "left",
    },
    priceData: {
      width: "50%",
      fontWeight: "bold",
      textAlign: "end",
    },
  }));

  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  console.log(props.row);
  const { name, image_url, region, price } = props.row;
  return (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.flexContainer}>
        <img
          src={process.env.PUBLIC_URL + `/images/bitmap/${image_url}`}
          alt="logo"
          className={classes.image}
        />
        <Typography component="div" className={classes.info}>
          <Box textAlign="left" fontWeight="fontWeightMedium">
            {name}
          </Box>
          <Box textAlign="left">{region}</Box>
        </Typography>
      </div>

      <Typography component="div" variant="h5">
        <Box textAlign="left" fontWeight="fontWeightMedium">
          Pricing
        </Box>
      </Typography>
      <div className={classes.flexContainer}>
        <span className={classes.duration}>1 week - 1 Month</span>
        <span className={classes.priceData}>${price.month}</span>
      </div>

      <div className={classes.flexContainer}>
        <span className={classes.duration}>6 Months</span>
        <span className={classes.priceData}>${price.halfYear}</span>
      </div>

      <div className={classes.flexContainer}>
        <span className={classes.duration}>1 Year</span>
        <span className={classes.priceData}>${price.year}</span>
      </div>
    </div>
  );
};
export default Price;
