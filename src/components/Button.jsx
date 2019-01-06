import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  /**
   * Hookup a context object to a class component(Button Class in this case)
   * "contextType" is a reserved property name in React
   */
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    console.log(this.context);
    return <button className="ui button primary">{text}</button>;
  }
}

// optional way to initialize contextType
// Button.contextType = LanguageContext;

export default Button;
