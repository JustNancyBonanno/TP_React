import React from "react";

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
     return(
      <span className="Boton">
        {this.props.titulo}
      </span>
     )
  }
}
