import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <BurgerBuilder />
		<h1>Hello world</h1>
      </Layout>
    );
  }
}

export default App;
