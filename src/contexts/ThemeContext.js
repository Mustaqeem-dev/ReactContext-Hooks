import React, { createContext, Component } from "react";

export const themeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    islightTheme: true,
    light: { syntext: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntexr: "#ddd", ui: "#333", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState({ islightTheme: !this.state.islightTheme });
  };
  render() {
    return (
      <themeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </themeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
