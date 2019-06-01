import React, { Component } from 'react';
import store from '../store';


class StatsRakings extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authMessage:"",
            user: {}
          }

        this.getPartidas(store.getState().User.user.username);
        this.getPartidas = this.getPartidas.bind(this);

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
                            <td id="p1"></td>
                            <td id = "t1"></td>
                        </tr>
                        <tr>
                            <td id="p2"></td>
                            <td id = "t2"></td>
                        </tr>
                        <tr>
                            <td id="p3"></td>
                            <td id = "t3"></td>
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
                document.getElementById("p1").innerHTML = user[0].puntuacion;
                document.getElementById("t1").innerHTML = user[0].tiempo_jugado;
               }

               if(user[1])
               {
                document.getElementById("p2").innerHTML = user[1].puntuacion;
                document.getElementById("t2").innerHTML = user[1].tiempo_jugado;
               }

               if(user[2])
               {
                document.getElementById("p3").innerHTML = user[2].puntuacion;
                document.getElementById("t3").innerHTML = user[2].tiempo_jugado;

               }
            }
        });

    }

    

}
export default StatsRakings;