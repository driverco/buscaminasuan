import React, { Component } from 'react';
import store from '../store';


class StatsBox extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authMessage:"",
            user: {}
          }

        this.cargarDatos();


        this.cargarDatos = this.cargarDatos.bind(this);
    }

    componentDidMount() {
    
        this.setState({
          authMessage: store.getState().User.authMessage,
          user: store.getState().User.user
        });
        store.subscribe( () => {
          this.setState({
            authMessage: store.getState().User.authMessage,
            user: store.getState().User.user
          })
        });
        this.unsubscribe = store.subscribe(() => { });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }

    render (){
        return(

        <div className ="col-md-4">
            <div className = "card mt-4 bg-info text-white">
                <div className = "card-header">
                    <h3 >{this.props.titulo}</h3>
                </div>
                <div className = "card-body">

                    <table className="table">
                        <thead>
                        <tr>
                            <th>{this.props.col1}</th>
                            <th>{this.props.col2}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td id="puntos1"></td>
                            <td id = "tiempo1"></td>
                        </tr>
                        <tr>
                            <td id="puntos2"></td>
                            <td id = "tiempo2"></td>
                        </tr>
                        <tr>
                            <td id="puntos3"></td>
                            <td id = "tiempo3"></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <div>

                
            </div>
        </div>

        )
    }


    cargarDatos()
    {
        
        if(this.props.modo == "puntajes")
        {
            this.getPuntuacion(store.getState().User.user.username);

        }
        else
        {
            if(this.props.modo == "raking")
            {
                this.getPartidas(store.getState().User.user.username);

            }
        }

    }

    getPuntuacion (iduser)
    {
        fetch(`/api/stats/puntajes/${iduser}`)
        .then(res => res.json())

        .then(user => {

            if(user.length ===0 ){
                console.log("Usuario o Clave Invalido")
            }else
            {
                
               if(user[0])
               {
                document.getElementById("puntos1").innerHTML = user[0].puntuacion;
                
                switch(user[0].dificultad )
                {
                    case 1: document.getElementById("tiempo1").innerHTML = 'Facil';
                    break;
                    case 2: document.getElementById("tiempo1").innerHTML = 'Medio';
                    break;
                    case 3: document.getElementById("tiempo1").innerHTML = 'Dificil';
                    break;
                }
                
               }

               if(user[1])
               {
                document.getElementById("puntos2").innerHTML = user[1].puntuacion;
                
                switch(user[1].dificultad )
                {
                    case 1: document.getElementById("tiempo2").innerHTML = 'Facil';
                    break;
                    case 2: document.getElementById("tiempo2").innerHTML = 'Medio';
                    break;
                    case 3: document.getElementById("tiempo2").innerHTML = 'Dificil';
                    break;
                }

               }

               if(user[2])
               {
                document.getElementById("puntos3").innerHTML = user[2].puntuacion;

                switch(user[2].dificultad )
                {
                    case 1: document.getElementById("tiempo3").innerHTML = 'Facil';
                    break;
                    case 2: document.getElementById("tiempo3").innerHTML = 'Medio';
                    break;
                    case 3: document.getElementById("tiempo3").innerHTML = 'Dificil';
                    break;
                }

               }
            }
        });

    }

    getPartidas (iduser)
    {

        fetch(`/api/stats/partidas/${iduser}`)
        .then(res => res.json())

        .then(user => {

            if(user.length ===0 ){
                console.log("Usuario o Clave Invalido")
            }else
            {
                
               if(user[0])
               {
                document.getElementById("puntos1").innerHTML = user[0].puntuacion;
                document.getElementById("tiempo1").innerHTML = user[0].tiempo_jugado;
               }

               if(user[1])
               {
                document.getElementById("puntos2").innerHTML = user[1].puntuacion;
                document.getElementById("tiempo2").innerHTML = user[1].tiempo_jugado;
               }

               if(user[2])
               {
                document.getElementById("puntos3").innerHTML = user[2].puntuacion;
                document.getElementById("tiempo3").innerHTML = user[2].tiempo_jugado;

               }
            }
        });

    }

  
    

}
export default StatsBox;