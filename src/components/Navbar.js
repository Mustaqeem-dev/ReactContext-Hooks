import React, { Component } from "react";
import { themeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <themeContext.Consumer>
            {(themecontext) => {
              const { isAuthenticated, toggleAuth } = authContext;
              const { islightTheme, light, dark } = themecontext;
              const theme = islightTheme ? light : dark;

              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? "loggedin" : "loggedout"}
                  </div>
                  <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                  </ul>
                </nav>
              );
            }}
          </themeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
