import React, { Component } from "react";
import { themeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
  static contextType = themeContext;
  render() {
    const { islightTheme, light, dark } = this.context;
    const theme = islightTheme ? light : dark;
    return (
      <div
        className="books"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>the way of kinds</li>
          <li style={{ background: theme.ui }}>lord of the rings</li>
          <li style={{ background: theme.ui }}>wizard of oz</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
