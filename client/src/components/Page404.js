import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
    render (){
        return(
            <div className="Page404 text-center">
                <br/><br/><br/><br/>
                <h1 > Lo sentimos, tu página no ha sido encontrada </h1>
                <p>Que tal si en vez de esta página te tomas una malteada de chocolate?, o mejor si vamos al <Link to="/">Home</Link>?</p>
                <br/><br/><br/><br/>
            </div>
        )
    }
}

export default Page404;