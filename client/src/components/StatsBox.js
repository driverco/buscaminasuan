import React, { Component } from 'react';




class StatsBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            id_usr:'',
            login:'',
            puntuacion:'',
            tiempo_jugado:''
        }
        this.getPuntuacion = this.getPuntuacion.bind(this);
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
                        <td>{this.getPuntuacion(77181305)}</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>75</td>
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

    getPuntuacion (iduser)
    {
        console.log('Parametro de entrada >>> ' + iduser);

        console.log('Antes del llamado a la funcion');

        fetch(`/api/users/getPuntajes${iduser}`)
        .then(res => res.json())
        .then(user => {
          console.log(user);
          if(user.length > 0 ){
              console.log("resultado >>>>>>>>>>> " + JSON.stringify(user));
          }else{
            console.log('Fallo para Identificacion del jugador >>> ' + iduser);
          }
        })
    }

}
export default StatsBox;