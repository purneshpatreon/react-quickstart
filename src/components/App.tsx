import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import * as React from "react";
import { hot } from "react-hot-loader";
import "../App.css";
import "./../assets/scss/App.scss";
import Main from "./Main";
import Main1 from "./Main1";

class App extends React.Component<Record<string, unknown>, undefined> {
  dockBar: SidebarComponent;
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }
  // Toggle(Open/Close) the Sidebar
  toggleClick() {
    this.dockBar.toggle();
  }
  public render() {
    /* eslint-disable */ 
    return (
      <div className="control-section">
                <div id="wrapper">
          <SidebarComponent
            id="dockSidebar"
            ref={(Sidebar) => (this.dockBar = Sidebar)}
            enableDock={true}
            dockSize="72px"
            width="220px">
                        <div className="dock">
                            <ul>
                                <li className="sidebar-item" id="toggle" onClick={this.toggleClick}>
                                    <span className="e-icons expand"/>
                                    <span className="e-text" title="menu">Menu</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons home"/>
                                    <span className="e-text" title="home">Home</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons profile"/>
                                    <span className="e-text" title="profile">Profile</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons info"/>
                                    <span className="e-text" title="info">Info</span>
                                </li>
                                <li className="sidebar-item">
                                    <span className="e-icons settings"/>
                                    <span className="e-text" title="settings">Settings</span>
                                </li>
                            </ul>
                        </div>
                    </SidebarComponent>
                    <div id="main-content container-fluid col-md-12 ">
                    <div id="main-area">
                          <Main></Main>
                          <span></span>
                          <hr className="rounded"></hr>
                          <Main1></Main1>
                          <span></span>
                          <hr className="rounded"></hr>
                        </div>     
                    </div>
                </div>
            </div>  
    );
  }
}

declare let module: Record<string, unknown>;
export default hot(module)(App);
