import React from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Listado from "./componentes/Listado";
import "./styles.css";

const apiUrl = 'https://hd6v8q-3000.csb.app/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materias:[
        {nombre:"matematica", codigo:"1223", hscatedras:"5hs", docente:"fulanito"}
      ]
    };
  }
guardar(datos){
	axios.post(apiUrl +"/materias", datos )
	.then((response) => {
    alert(response.data.status)
		console.log('Materia guardada con exito:', response.data);
	   this.obtenerMaterias();//llamar a obtener materias obtenerMaterias()
	})
	.catch((error) => {
		console.log('Error al guardar la materia', error);
	});
}

obtenerMaterias(){
	axios.get('http://192.168.0.196:3010/api/materias')
	.then((response) => {
		console.log( response.data);
		//const materiasObtenidas = response.data.materias;
		//escribir(materiasObtenidas);//llamar a ecribir materias
	})
	.catch((error) => {
		console.log('Error al traer datos de la materia', error);
	}); 
}

  render() {
    return (
      <div className="contenedor">
        <div className="Header">
        <Header />
        </div>
        <div className="cuerpo">
          <Formulario guardar={(datos)=> this.guardar(datos)}/>
          <Listado materias={this.state.materias}/>
        </div>
        <div className="Footer">
        <Footer />
        </div>
      </div>
    );
  }
}