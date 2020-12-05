import React,{Component, useState, useEffect} from "react";

function Layout(adminData){
  if(adminData && adminData.adminData){
    debugger
    return adminData.adminData.map((i)=>{
      return <div>
        <div>
          {i.name}
        </div>
        <div>
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
        <div className="tabHeading noselect">Notification</div>
        {/* <Layout adminData={this.props.adminData}/> */}
      </div>
    );
  }
}

export default Admin;