import React from "react";
import Boton from "./Boton";
import Carta from "./Carta";

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
      {this.props.materias.map((materia, index) => {
	return(
		<Carta key={index} datos={materia} />
	)
})}
      </div>
      <Boton titulo="Limpiar"/>
      
      </div>

    );
  }
}

