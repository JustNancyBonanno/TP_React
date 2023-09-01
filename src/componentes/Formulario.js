import React from "react";
import Boton from "./Boton";
import Input from "./Input";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materia: "",
      docente: "",
      horas: "",
      codigo: ""
    };
  }
  render() {
    const { materia, docente, horas, codigo } = this.state;
    return (
      <div className="Formulario">
        FORMULARIO DE INGRESO DE MATERIAS


          <Input titulo="Materia:" />

          
          <Input titulo="Docente:" />
     
          {" "}
          <Input titulo="Horas:" />{" "}
  
          {" "}
          <Input titulo="Codigo:" />{" "}
  
          {" "}
          <Boton titulo="Guardar"/>
          <Boton titulo="Agregar"/>
          <Boton titulo="Mostrar"/>
      </div>
    );
  }
}
