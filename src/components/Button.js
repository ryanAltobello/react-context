import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // SETUP FOR USING THIS.CONTEXT

  // Has to be called contextType
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Submit" : "Voorleggen";
    return <button className="ui button primary">{text}</button>;
  }

  /* SETUP FOR USING CONSUMER INSTEAD OF THIS.CONTEXT (USE CONSUMER WHEN ACCESSING MULTIPLE CONTEXT OBJECTS IN THE SAME COMPONENT)

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  }
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  */
}

export default Button;
