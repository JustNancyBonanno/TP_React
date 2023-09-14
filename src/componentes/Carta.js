import React from "react";

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    const {nombre, docente, hsCatedras, codigo}=this.props
    return (
      <div class="Cuadradito">
			<span onclick="eliminar({materia.codigo})" class="EliminarMateria"> x </span>
			<span>{nombre}</span>
			<span>{docente}, {hsCatedras}</span>
			<span>cod: {codigo}</span>
			</div>
    );
  }
}
