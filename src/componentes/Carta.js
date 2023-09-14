import React from "react";

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    const {nombre, docente, hsCatedras, codigo}=this.props
    return (
      <div class="Tarjetas">
			<span onclick="eliminar({materia.codigo})" class="EliminarMateria"> {nombre}, {docente}, {hsCatedras}, {codigo} </span>
			<span>{nombre}</span>
			<span>{docente}, {hsCatedras}</span>
			<span>{codigo}</span>
			</div>
    );
  }
}
