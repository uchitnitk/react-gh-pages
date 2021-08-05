import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  flexContainer: {
    display: "flex",
  },
  image: {
    flex: "1",
    maxWidth: "40px",
    maxHeight: "40px",
    width: "auto",
    height: "auto",
    paddingRight: "10px",
  },
  info: {
    fontSize: "14px",
  },
});
const CampaignColumn = (props) => {
  const { region, name, image_url } = props.row;
  const classes = useStyles();
  return (
    <TableCell key={props.key} align={props.align}>
      <div className={classes.flexContainer}>
        <img
          src={process.env.PUBLIC_URL + `/images/${image_url}`}
          alt="logo"
          className={classes.image}
        />
        <Typography component="div" className={classes.info}>
          <Box textAlign="left" fontWeight="fontWeightMedium">
            {name}
          </Box>
          <Box textAlign="left" fontStyle="italic">
            {region}
          </Box>
        </Typography>
      </div>
    </TableCell>
  );
};
export default CampaignColumn;
