import React ,{Component} from 'react';
class Comment extends Component{
    render(){
        return(
            <div>
                <h5>{this.props.curnt.body}</h5>
                <h5>{this.props.curnt.time}</h5>
            </div>
        );
    };
}
export  default  Comment;