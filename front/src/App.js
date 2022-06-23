import { Component } from "react";
import "./App.css";
import StartPage from "./StartPage";
import Logo from "./Logo";

class App extends Component {
  render() {
    return (
      <div>
        <Logo></Logo>
        <StartPage> </StartPage>
      </div>
    );
  }
}

export default App;
