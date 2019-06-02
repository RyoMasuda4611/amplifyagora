import React from "react";
import { Menu as Nav, Icon, Button } from "element-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleSignout }) => (
    <Nav mode="horizontal" theme="dark" defaultActive="1">
      <div className="nav-container">
        <Nav.Item index="1">
         <NavLink to="/" className="nav-link">
             <span className="app-title">
                <img src="https://icon.now.sh/account_balance/f90" alt="App icon" className="app-icon"/>
             </span>
         </NavLink>
        </Nav.Item>
        <div className="nav-items">
          <Nav.Item>
             <span className="app-user">Hello, {user.username}</span>
          </Nav.Item>
          <Nav.Item index="3">
            <NavLink to="/profile" className="nav-link">
              <Icon name="setting"/>
            </NavLink>
          </Nav.Item>
          <Nav.Item index="4">
            <Button type="warning" onClick={handleSignout}>Sign out</Button>
          </Nav.Item>
        </div>
      </div>
    </Nav>
);

export default Navbar;
