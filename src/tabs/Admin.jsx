import React,{Component, useState, useEffect} from "react";

function Layout(props){
  if(props && props.props.adminData){
    return props.props.adminData.map((i, index)=>{
      return <div className="adminRecord" key={index}>
        { props.props.isAdmin && <i className="material-icons noselect iconButton">delete</i> }
        <div className="adminName">
          {i.name}
        </div>
        <div className="adminEmail">
          {i.email}
        </div>
      </div>
    })
  }
  else{
    return <div>No admins found</div>
  }
}
class Admin extends Component {
  constructor() {
    super();
    this.state = {
      adminRecords: []
    };
  }
render(){
    return (
      <div>
        { this.props.isAdmin && <i className="material-icons noselect iconButton addIcon">add</i> }
        <div className="tabHeading noselect">Administration</div>
        <Layout props={this.props}/>
      </div>
    );
  }
}

export default Admin;