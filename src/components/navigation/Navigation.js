import React from "react";
import "./Navigation.scss";

const NavItem = props => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </a>
    </li>
  );
};

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = "dropdown-menu" + (this.state.isToggleOn ? " show" : "");
    console.log('call nav')
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={e => {
            this.showDropdown(e);
          }}
        >
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="/">
        <img src="/images/DP.png" alt="DP logo" width="30px" height="auto"/>
      </a>

      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          {/* <NavItem path="/" name="Home" /> */}
          <NavItem path="/about" name="About" />
          <NavDropdown name="Artists">
            <a className="dropdown-item" href="/Artist1">
              Artist 1
            </a>
            <a className="dropdown-item" href="/Artist2">
              Artist 2
            </a>
            <a className="dropdown-item" href="/Artist3">
              Artist 3
            </a>
          </NavDropdown>
          <NavItem path="/contact" name="Contact" />
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
