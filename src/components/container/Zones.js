import React from 'react';
import Zone from '../presentation/Zone'
import superagent from 'superagent'
class Zones extends  React.Component {
    constructor(){
        super();
        this.state={
            list:[],
            zone:''
        }
    }
    componentDidMount() {
        console.log('zone component did mount')
        superagent
            .get('/api/zone')
            .query(null)
            .set('Accept', 'Applcation/json')
            .end((err, response) => {
                    if (err) {
                        console.log("ERROR in superagent" + err);
                        return;
                    }
                    console.log(JSON.stringify(response.body));
                              var data=[];
                              var ll=[];
                              var obj={
                                  name:''
                              }
                              data=response.body.message;
                              for(var i=0;i<data.length;i++) {
                                 // console.log(data[i]._id);
                                  obj.name=data[i].name;
                                  ll.push(obj);

                                  console.log("new list:"+obj.name);
                              }
                              this.setState({lists:ll});
                              console.log("list is:"+JSON.stringify(this.state.lists));


                }
            )
    }

    onsubmit() {
        console.log("button pressed");
        var obj={
            name:this.refs.name.value
        }
        var newlist=[];
        newlist=this.state.list;
        newlist.push(obj);
        console.log(newlist);
        this.setState({list:newlist,zone:name});


    }

    namechange(){
        console.log("name change")
    }
    passwordchange(){
        console.log("password change");
    }
    render() {
        console.log("zone render")
        const listitem=this.state.list.map((zone,i) =>{
            return(<li key={i}><Zone  curntzone={zone}/></li>);
        })
        return(
        <div>
            <ol>
                {listitem}
            </ol>
            <input type="text" onChange={this.namechange.bind(this)} ref='name' placeholder="name"/>
            <input type="text" onChange={this.passwordchange.bind(this)} ref='passwor' placeholder="password"/>
            <button onClick={this.onsubmit.bind(this)}>Submit</button>
        </div>
        );

    }
}
export default  Zones;