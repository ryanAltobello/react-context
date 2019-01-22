import React from "react";
import UserCreate from "./UserCreate";
import LanguageSelector from "../components/LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
