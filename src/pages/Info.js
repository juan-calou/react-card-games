import React from "react";
//import { Link } from "react-router-dom";

import "./styles/Info.css";

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");
    /// set state
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("6. componentWillUnmount");
  }

  render() {
    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="container">
          <div className="buttons">
            <h1>Info</h1>
            <p>Juan Calou</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Info;
