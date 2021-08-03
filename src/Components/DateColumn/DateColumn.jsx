import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const getDate = (timestamp) => {
  const date = new Date(timestamp);
  var month = date.getUTCMonth(); //months from 0-11
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();
  const newdate = `${months[month]} ${year}, ${day}`;
  return newdate;
};

const getDifferenceOfDates = (index, date) => {
  const nowDate = new Date();
  const diffTime = Math.abs(nowDate - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let diffDaysString = "";
  if (index === 0) {
    diffDaysString = `${diffDays} Days Ahead`;
  } else if (index === 1) {
    diffDaysString = "Today";
  } else {
    diffDaysString = `${diffDays} Days Ago`;
  }
  return diffDaysString;
};
const DateColumn = (props) => {
  const date = getDate(props.timestamp);
  const diffOfDates = getDifferenceOfDates(
    props.index,
    new Date(props.timestamp)
  );

  return (
    <TableCell key={props.key} align={props.align}>
      <Typography component="div">
        <Box textAlign="left" fontWeight="fontWeightMedium">
          {date}
        </Box>
        <Box
          textAlign="left"
          fontSize="fontSize"
          fontWeight="fontWeightRegular"
          fontStyle="italic"
        >
          {diffOfDates}
        </Box>
      </Typography>
    </TableCell>
  );
};
export default DateColumn;
