import React ,{Component} from 'react';
import Comment from '../presentation/Comment'
class Comments extends Component{
    constructor(){
        super();
        this.state= {
            comentlist: [{body: 'wilsmit', time: '12:30'}, {body: 'ranchier', time: '1:00'}, {body: 'adam', time: '2:00'}]
    }
    }

    render() {
        console.log('comment render');
        const listitems=this.state.comentlist.map((coment,i) =>{
            return(<li key={i}><Comment  curnt={coment}/></li>);
        })
        return(
            <div>
                <ol>
                    {listitems}
                </ol>
            </div>
        );

    }

}
export  default  Comments;