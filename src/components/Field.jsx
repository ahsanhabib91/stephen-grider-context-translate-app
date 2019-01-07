import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  /**
   * Hookup a context object to a class component(Button Class in this case)
   * "contextType" is a reserved property name in React
   */
  static contextType = LanguageContext;
  render() {
    console.log("[Field]", this.context);
    const text = this.context.language === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;

// optional way to initialize contextType
// Field.contextType = LanguageContext;
