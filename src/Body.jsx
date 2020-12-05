import React,{Component} from "react";
import Admin from './tabs/Admin.jsx'
import Shopping from './tabs/Shopping.jsx'
import Notification from './tabs/Notification.jsx'
import Setting from './tabs/Settings.jsx'
class Body extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0
    };
  }
  changeTab(index){
    this.setState({ currentTab: index });
  }
  render() {
    return (
        <div>
          {!!this.props.signedIn ? <div>
            <div className="row">
              <div className={`cols-3 ${this.state.currentTab == 0 && 'selectedTab'}`} onClick={()=>{this.changeTab(0)}}>
                <i className="material-icons tabIcon noselect">supervisor_account</i>
              </div>
              <div className={`cols-3 ${this.state.currentTab == 1 && 'selectedTab'}`} onClick={()=>{this.changeTab(1)}}>
                <i className="material-icons tabIcon noselect">add_shopping_cart</i>
              </div>
              <div className={`cols-3 ${this.state.currentTab == 2 && 'selectedTab'}`} onClick={()=>{this.changeTab(2)}}>
                <i className="material-icons tabIcon noselect">add_alert</i>
              </div>
              <div className={`cols-3 ${this.state.currentTab == 3 && 'selectedTab'}`} onClick={()=>{this.changeTab(3)}}>
                <i className="material-icons tabIcon noselect">settings</i>
              </div>
            </div>
            { this.state.currentTab==0 && <div>
             <Admin isAdmin={this.props.isAdmin}  adminData={this.props.adminData}/>
            </div>}
            { this.state.currentTab==1 && <div>
            <Shopping/>
            </div>}
            { this.state.currentTab==2 && <div>
            <Notification/>
            </div>}
            { this.state.currentTab==3 && <div>
            <Setting/>
            </div>}
          </div> : <div className="loginPage">
            <img className="grainImage" src="https://res.cloudinary.com/grainx/image/upload/v1605206275/grain-rice_z7chxc.png"></img>
            <div className="tagLine">Login to unlock wide range of rich organic fruits and vegetable and other grocery needs right at your doorstep.</div>
          </div> }
        </div>
    );
  }
}

export default Body;
