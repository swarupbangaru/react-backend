import React, { Component } from "react";
import ReactDom from 'react-dom';
class Stuff extends React.Component {

    render() {
        return (
            <div>
            <div className="stuffbutton">
                <input type="button" onClick={this.mount.bind(this)} className="btn btn-warning btn-group-lg text-success singin" value="sign in"/>
                <input type="button" onClick={this.unmount.bind(this)} className="btn btn-warning btn-group-lg text-success singout"value="sign out"/>
            </div>
                <div id="form"></div>
            </div>
        );
    }
    mount(){
        ReactDom.render(<Signup/>,document.getElementById("form"))
    }
    unmount(){
        ReactDom.unmountComponentAtNode(document.getElementById("form"))
    }
}
class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            phone:''
        }
        this.update=this.update.bind(this);

    }
    update(){

        this.setState({name:this.refs.name.value,email:this.refs.email.value,phone:this.refs.phone.value});

    }
    render(){
        return(
            <div >
                <div>
                <input type="text" ref="name" className="form-control" placeholder="Name" />
                <input type="email" ref="email" className="form-control" placeholder="email"/>
                <input type="text" ref="phone" className="form-control" placeholder="phone"/>
                    <input type="button" value="submit" className="btn btn-group-lg btn-success" onClick={this.update}/>
                </div>
                <div className="form-horizontal">
                    <label className="text-info">Name:<span className="text-danger">{this.state.name}</span></label>
                    <label className="text-info">Email:<span className="text-danger">{this.state.email}</span></label>
                    <label className="text-info">Phone:<span className="text-danger">{this.state.phone}</span></label>




                </div>
            </div>
        );
    }

}

export default Stuff
