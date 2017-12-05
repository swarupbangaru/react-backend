import React from 'react';
import Zones from '../container/Zones'
import Comments from "../container/Comments";
import style from '../styles'
class Home extends React.Component{
    render(){
        console.log('home render');
        return(
            <div className="container" style={style.container}>
                <div className="col-md-4">
            <Zones/>
                </div>
                <div className="col-md-8">
            <Comments/>
                </div>
            </div>
        );
    }

}
export  default  Home;