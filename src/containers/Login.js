import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../component/UI/Input/Input";
import * as actions from "../store/actions/index";
import NavigationItem from "../component/Navigation/NavigationItem/NavigationItem";
import logo from "../assets/images/logo.png";

class Login extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Username or Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      false
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/search" />;
    }
    const imgStyle = {
      height: "190px",
      width: "auto",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    };
    const navStyle = {
      paddingTop: "50px",
      paddingRight: "40px"
    };
    const spanStyle = {
      color: "#5a5c5e"
    };
    const spanStyleMotto = {
      fontSize: "37px",
      paddingLeft: "14px",
      color: "#5a5c5e"
    };
    const buttonStyle = {
      marginRight: "10px",
      backgroundColor: "#5d83a6",
      borderColor: "#9da2a6",
      width: "23%"
    };
    const divStyle = {
      paddingTop: "5%"
    };
    const spaceDivStyle = {
      paddingBottom: "20px"
    };
    const borderDivStyle = {
      border: "solid",
      borderColor: "#4a8bc0",
      margin: "0.2%",
      paddingBottom: "15%",
      borderWidth: "thin"
    };
    return (
      <div style={borderDivStyle}>
        {authRedirect}
        <ul className="nav justify-content-end">
          <li className="nav-item" style={navStyle}>
            <NavigationItem link="/signup">
              <span style={spanStyle}>Sign up</span>
            </NavigationItem>
          </li>
        </ul>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4" style={divStyle}>
            <img src={logo} style={imgStyle} />
            <br></br>
            <span style={spanStyleMotto}>
              Building Product Selection Platform
            </span>
            <div style={spaceDivStyle}></div>
            <form onSubmit={this.submitHandler}>
              {form}
              <button
                className="btn btn-primary float-right"
                style={buttonStyle}
              >
                Log in
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
