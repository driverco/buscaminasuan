import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Scene from './Scene';
import './BoardLevels.css';

class BoardLevels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
            };
        this.createScene = this.createScene.bind(this);
    }
    
    render(){
        return(
            
            <div className="text-center"  >
                <div id="LevelRow">
                <h1 className="text-center">tamaño:{this.props.size}</h1>
                <span className="text-center">Ahora Selecciona El Nivel</span>
                    <div className="row row-centered" >
                        <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.props.size,this.props.easy)}>
                            <div className=" card-title text-center colorDark">
                                <h2>Fácil </h2>
                            </div>
                            <div className="card-body text-center">
                            Bombas: {this.props.easy}
                                {this.createDemoBombs(this.props.easy)}
                            </div>
                        </div>
                        <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.props.size,this.props.medium)}>
                            <div className=" card-title text-center colorDark">
                                <h2>Medio </h2>
                            </div>
                            <div className="card-body text-center">
                                Bombas: {this.props.medium}
                                {this.createDemoBombs(this.props.medium)}
                            </div>
                        </div>
                        <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.props.size,this.props.hard)}>
                            <div className=" card-title text-center colorDark">
                                <h2>Difícil </h2>
                            </div>
                            <div className="card-body text-center">
                            Bombas: {this.props.hard}
                                {this.createDemoBombs(this.props.hard)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) 

    }
    /* Crear tabla de muestra*/
    createDemoBombs = (bombs) => {
        let bombsDemo = []
        for (let i = 0; i < bombs; i++) {
            if(i % 10 === 0){
                bombsDemo.push(<br/>)
            }
            bombsDemo.push(<i className="material-icons icon">brightness_7</i>)
        }
        return bombsDemo
    }
    createScene = (size,bombs)=> {
        ReactDOM.render(
            <Scene size={size} bombs = {bombs} />,
            document.getElementById('Content')
          );

    }
}
export default BoardLevels;