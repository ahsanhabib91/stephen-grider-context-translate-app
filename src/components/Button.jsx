import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color = "primary") {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  /**
   * Hookup a context object to a class component(Button Class in this case)
   * "contextType" is a reserved property name in React
   */
  //   static contextType = LanguageContext;
  render() {
    // For multiple Contexts, "this.context" cannot be used. Need to use "Consumer" instead
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    // console.log(this.context);

    return (
      // set the default color to primary
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

// optional way to initialize contextType
// Button.contextType = LanguageContext;

export default Button;
