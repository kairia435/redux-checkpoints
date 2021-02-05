import React, { Component } from "react";
import ListTask from "./ListTask";
//import Stars from "../StarsComponent/StarsComponent";
//import "./Style.css";
import ActionName from "../Actions/ActionName";

import { connect } from "react-redux";
class Task extends Component {
  searchbyName = e => {
    let x = "";
    x = e.target.value;

    this.props.getName(x);
  };

  
  render() {
    return (
      <div className="task-app">
        <div className="inputs">
          <form>
            <input
              type="text"
              onChange={this.searchbyName}
              className="typingbar"
              placeholder="search..."
            />
            <input type="submit" value="search" className="submitbtn" />
          </form>

          
        </div>
        <ListTask />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getName: a => dispatch(ActionName(a))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Task);