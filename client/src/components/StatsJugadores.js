import React, { Component } from 'react';
import store from '../store';


class StatsJugadores extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authMessage:"",
            user: {}
          }

        this.getJugadores(store.getState().User.user.username);
        this.getJugadores = this.getJugadores.bind(this);

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
                            <td id="pt1"></td>
                            <td id = "j1"></td>
                        </tr>
                        <tr>
                            <td id="pt2"></td>
                            <td id = "j2"></td>
                        </tr>
                        <tr>
                            <td id="pt3"></td>
                            <td id = "j3"></td>
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



    getJugadores (iduser)
    {

        fetch(`/api/stats/jugadores/${iduser}`)
        .then(res => res.json())

        .then(user => {

            if(user.length ===0 ){
                console.log("Usuario o Clave Invalido")
            }else
            {
                
               if(user[0])
               {
                document.getElementById("pt1").innerHTML = user[0].username;
                document.getElementById("j1").innerHTML = user[0].total;
               }

               if(user[1])
               {
                document.getElementById("pt2").innerHTML = user[1].username;
                document.getElementById("j2").innerHTML = user[1].total;
               }

               if(user[2])
               {
                document.getElementById("pt3").innerHTML = user[2].username;
                document.getElementById("j3").innerHTML = user[2].total;

               }
            }
        });

    }

    

}
export default StatsJugadores;