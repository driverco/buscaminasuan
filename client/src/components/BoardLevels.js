import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import './BoardLevels.css';
import store from '../store';
import { toggleLevels as toggleLevelsAction, setBombs as setBombsAction} from '../actions/ActionCreatorSelectBoard';
import { startBoard } from '../actions/ActionCreatorScene';


class BoardLevels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            size:"none",
            showLevels:false,
            levels:[]
          }
        this.toggleLevels = this.toggleLevels.bind(this);
        this.createScene = this.createScene.bind(this);
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                showLevels: store.getState().SelectBoard.showLevels,
                size:store.getState().SelectBoard.size,
                levels:store.getState().SelectBoard.levels
            })
        });
        this.unsubscribe = store.subscribe(() => { });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }

    render(){
        if (this.state.showLevels )
            return(
                
                <div className="text-center"  >
                    <div id="LevelRow">
                        <div className="row row-centered" >
                            <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.state.levels.easy, this.state.levels.easySecs, store.getState().User.user.id, this.state.size, "easy", this.state.levels.easyPoints)}>
                                <div className=" card-title text-center colorDark">
                                    <h2>Fácil </h2>
                                </div>
                                <div className="card-body text-center">
                                Bombas: {this.props.easy}
                                    {this.createDemoBombs(this.state.levels.easy)}
                                </div>
                            </div>
                            <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.state.levels.medium, this.state.levels.mediumSecs, store.getState().User.user.id, this.state.size, "medium", this.state.levels.mediumPoints)}>
                                <div className=" card-title text-center colorDark">
                                    <h2>Medio </h2>
                                </div>
                                <div className="card-body text-center">
                                    Bombas: {this.props.medium}
                                    {this.createDemoBombs(this.state.levels.medium)}
                                </div>
                            </div>
                            <div className="card col-centered ml-4 boardlevel p-3" onClick={()=>this.createScene(this.state.levels.hard, this.state.levels.hardSecs, store.getState().User.user.id, this.state.size, "hard", this.state.levels.hardPoints)}>
                                <div className=" card-title text-center colorDark">
                                    <h2>Difícil </h2>
                                </div>
                                <div className="card-body text-center">
                                Bombas: {this.props.hard}
                                    {this.createDemoBombs(this.state.levels.hard)}
                                </div>
                            </div>

                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg" onClick={()=>this.toggleLevels()}>Volver a Seleccionar tablero</button>

                </div>
            ) 
        else
            return (null);
    }
    toggleLevels = () =>{
        store.dispatch(toggleLevelsAction("none", 0, 0,""));
    }
    /* Crear tabla de muestra*/
    createDemoBombs = (bombs) => {
        let bombsDemo = []
        for (let i = 0; i < bombs; i++) {
            if(i % 10 === 0){
                bombsDemo.push(<br key={"br"+i}/>)
            }
            bombsDemo.push(<i className="material-icons icon" key={"i"+i}>brightness_7</i>)
        }
        return bombsDemo
    }
    createScene = (bombs, secs, userId, size, level, score)=> {
        store.dispatch(setBombsAction(bombs, secs));
        store.dispatch(startBoard(bombs, store.getState().SelectBoard.width, store.getState().SelectBoard.height, secs,
        userId,
        size,
        level, 
        score ));
        this.props.history.push("/Scene");
    }
}
export default withRouter( BoardLevels);