import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import ReactDOM from "react-dom";

import Kanban from './../pages/Kanban'
class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />


        <Kanban/> 
      </Container>
    );
  }
}

export default Content;