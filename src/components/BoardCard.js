import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import BoardLevels from './BoardLevels';
import './BoardCard.css';

class BoardCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
            };
        this.showLevels = this.showLevels.bind(this);
    }
    render(){
        return(
            <div className="card col-centered ml-4 boardcard p-3" onClick={() => this.showLevels(this.props.board.size, this.props.board.levels)} >
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
    }
    showLevels(size, levels) {

      const { visible } = this.state;
      this.props.visibleParent(!visible);
      this.setState({
        visible: !visible
      });
      if(visible){
        ReactDOM.render(
            <BoardLevels size= {size} easy={levels.easy} medium={levels.medium} hard={levels.hard} />,
            document.getElementById('selectLevel')
          );
      }
    
    }
    /* Crear tabla de muestra*/
    createTable = (width, height) => {
        let table = []
        for (let i = 0; i < height; i++) {
          let children = []
          for (let j = 0; j < width; j++) {
            children.push(<td className="celldemo"></td>)
          }
          table.push(<tr>{children}</tr>)
        }
        return table
    }
}

export default BoardCard;
