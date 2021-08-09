import React from "react";
import { withTranslation } from "react-i18next";
import Header from "./Components/Header/Header";
import TabView from "./Components/TabView/TabView";
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

  renderRadioButtons = () => {
    return (
      <div>
        <input
          checked={this.state.value === "en"}
          name="language"
          onChange={(e) => this.onLanguageHandle(e)}
          value="en"
          type="radio"
        />
        English &nbsp;
        <input
          name="language"
          value="jp"
          checked={this.state.value === "jp"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        Japanese &nbsp;
        <input
          name="language"
          value="de"
          checked={this.state.value === "de"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        German
      </div>
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
