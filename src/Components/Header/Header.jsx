import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    width: "100%",
    paddingLeft: "10%",
    paddingTop: "5%",
  },
});

const Header = (props) => {
  const { t } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h2" gutterBottom>
        {t("heading")}
      </Typography>
    </div>
  );
};

export default withTranslation()(Header);
