import React, { Component }  from 'react';
import './BoardCard.css';
import store from '../store';
import { toggleLevels as toggleLevelsAction} from '../actions/ActionCreatorSelectBoard';


class BoardCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLevels:false
          }
        this.toggleLevels = this.toggleLevels.bind(this);
    }
    componentDidMount() {
        store.subscribe( () => {
            this.setState({
                showLevels: store.getState().SelectBoard.showLevels
            })
        });
        this.unsubscribe = store.subscribe(() => { });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }

    render(){
        if (!this.state.showLevels )
            return(
                
                <div className="card col-centered ml-4 boardcard p-3" onClick={() => this.toggleLevels(this.props.board.size, this.props.board.width, this.props.board.height, this.props.board.levels)} >
                    <div className=" card-title text-center colorDark">
                        <h2>{this.props.board.size}</h2>
                    </div>
                    <div className="card-body text-center">
                        tamaño: {this.props.board.width} x {this.props.board.height}
                    </div>
                    <div className="row row-centered">
                        <table className="tabledemo"><tbody>
                            {this.createTable(this.props.board.width, this.props.board.height)}
                        </tbody></table>
                    </div>
                </div>
            )
            else
                return (null);
    }

    toggleLevels = (size, width, height, levels) =>{
        store.dispatch(toggleLevelsAction(size, width, height, levels));
    }
    /* Crear tabla de muestra*/
    createTable = (width, height) => {
        let table = []
        for (let i = 0; i < height; i++) {
          let children = []
          for (let j = 0; j < width; j++) {
            children.push(<td className="celldemo" key={"t"+width+"-"+height+"-"+i+"-"+j}></td>)
          }
          table.push(<tr key={"t"+width+"-"+height+"-"+i}>{children}</tr>)
        }
        return table
    }
}

export default BoardCard;
