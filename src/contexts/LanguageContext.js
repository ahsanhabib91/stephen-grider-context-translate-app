import React from "react";

// export default React.createContext("english");

// default value for the context object is "english"
// const context = React.createContext("english");
// console.log(context);
// export default context;

const Context = React.createContext("english");
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
    // console.log("state 1:", this.state);
  };

  render() {
    // console.log("state 2:", this.state);
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
