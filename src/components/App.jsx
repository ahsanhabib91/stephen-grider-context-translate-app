import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = (language, color) => {
    this.setState({ language, color });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english", "primary")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch", "red")}
          />
        </div>
        {/* provider creates a new channel/pipe of information, every time it calls */}
        {/* Provider get value from state */}
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        {/* Provider get value from "value" */}
        <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider>
        {/* Provider get value from default value */}
        <UserCreate />

        {/* Does not matter whether <ColorContext> is inside or outside */}
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
