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

  Guardar() {
    const { materia, docente, horas, codigo} = this.state;
    const msj = `La materia ha sido guardada.`
    alert(msj);
    
  }

  Agregar(){
    alert("nueva nota")
  }
  Mostrar(){
    alert("La materia fue mostrada  :( ")
  }


  render() {
    const { materia, docente, horas, codigo } = this.state;
    return (
      <div className="Formulario">
       <h3> FORMULARIO DE INGRESO DE MATERIAS</h3>
          <Input titulo="Materia" />
          <Input titulo="Docente" />
          <Input titulo="Horas" />
          <Input titulo="Codigo" />
          <div className="Botones">
          <Boton titulo="Guardar" onClick={() => this.Guardar()}/>
          <Boton titulo="Agregar" onClick={() => this.Agregar()}/>
          <Boton titulo="Mostrar" onClick={() => this.Mostrar()}/>
          </div>
      </div>
    );
  }
}
