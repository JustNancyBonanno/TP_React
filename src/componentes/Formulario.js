import React from "react";
import Boton from "./Boton";
import Input from "./Input";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      docente: "",
      hsCatedras: "",
      codigo: "",
      nota: "",
    };
  }


  guardar() {
    const { nombre, docente, hsCatedras, codigo, nota} = this.state;
  //  const msj = `${materia}, ${docente}, ${horas}, ${codigo}, ${nota}`;
    //alert(msj);
    const datos ={nombre, docente, hsCatedras, codigo, nota}
    this.props.guardar(datos);
  
  }

  agregarN(nota){
    const divNotas = document.getElementById('Notas');
    const notaFormulario = `<input type="number" class="nota"/>`
  
    divNotas.innerHTML += notaFormulario;
  }

  mostrar(){
    alert("La materia fue mostrada  :( ")
  }


  render() {
    const { materia, docente, horas, codigo, nota, } = this.state;
    return (
      <div className="Formulario">
       <h3> FORMULARIO DE INGRESO DE MATERIAS</h3>
          <Input titulo="Materia"
          valor={materia}
          onChange={(valor) => this.setState({ materia: valor })}  
          />
          <Input titulo="Docente"
          valor={docente}
          onChange={(valor) => this.setState({ docente: valor })}
          />
          <Input titulo="Horas"
          valor={horas} 
          onChange={(valor) => this.setState({ horas: valor })}/>
          <Input titulo="Codigo" 
          valor={codigo}
          onChange={(valor) => this.setState({ codigo: valor })}
          />
          <div className="Notas" id="Notas">
            <input titulo="nota" type="number" className="nota"
            valor={nota}
            onChange={(valor) => this.setState({ nota: valor })}/>
            <input  titulo="nota" type="number" className="nota"
             valor={nota}
             onChange={(valor) => this.setState({ nota: valor })}
             />
            <input titulo="nota" type="number" className="nota"
             valor={nota}
             onChange={(valor) => this.setState({ nota: valor })}
             />
          </div>
          <div className="Botones">
          <Boton titulo="Guardar" onClick={() => this.guardar()}/>
          <Boton titulo="Agregar" onClick={() => this.agregarN()}/>
          <Boton titulo="Mostrar" onClick={() => this.mostrar()}/>
          </div>
      </div>
    );
  }
}
