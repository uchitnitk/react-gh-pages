import React from "react";
import { withTranslation } from "react-i18next";
import Header from "./Components/Header/Header";
import TabView from "./Components/TabView/TabView";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en",
    };
  }

  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({ value: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  divStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
  };

  renderRadioButtons = () => {
    return (
      <FormControl component="fieldset" style={this.divStyle}>
        <RadioGroup
          aria-label="Language"
          name="Language"
          value={this.state.value}
          onChange={this.onLanguageHandle}
          row
        >
          <FormControlLabel value="en" control={<Radio />} label="English" />
          <FormControlLabel value="de" control={<Radio />} label="German" />
          {/* <FormControlLabel value="jp" control={<Radio />} label="Japanese" /> */}
        </RadioGroup>
      </FormControl>
    );
  };
  render() {
    return (
      <div className="App">
        {this.renderRadioButtons()}
        <Header />
        <TabView />
      </div>
    );
  }
}

export default withTranslation()(App);
