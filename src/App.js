import React, { Component } from "react";
import ColorApp from "./components/ColorApp";
import Container from "./components/Container";

export default class App extends Component {
  render() {
    return<Container>
       <ColorApp />
      
    </Container>;
  }
}
