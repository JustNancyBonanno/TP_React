import React from "react";
import Boton from "./Boton";

export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  render() {
    return (
      <div id="Listado" className="Listado">
     <h3> MATERIAS & INFORMACIÓN  </h3>
      <div className="Tarjetas" id="Lista"> 
      ss 
      </div>
      <Boton titulo="Limpiar"/>
      
      </div>

    );
  }
}

