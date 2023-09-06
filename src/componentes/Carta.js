import React from "react";

export default class Carta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="Cuadradito">
			<span onclick="eliminar({materia.codigo})" class="EliminarMateria"> x </span>
			<span>{materia.materia}</span>
			<span>{materia.docente}, {materia.horas}</span>
			<span>cod: {materia.codigo} - {materia.notas}</span>
			<span>prom: {promedio} </span>
			</div>
    );
  }
}
