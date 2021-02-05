import React, { Component } from "react";




import { connect } from "react-redux";
import ActionAdd from "../Actions/ActionAdd";
import ActionEdit from "../Actions/ActionEdit";
import ActionaddText from "../Actions/ActionaddText";

class ListTask extends Component {
  handelButton = () => {
    let NewTask = {
      id: prompt("enter the id of task"),
      description: prompt("enter the description "),
      isDone: prompt("say if task is done or not")
    };
    this.props.ActionAdd(NewTask);
  };

  handelEdit =e => {
    
    this.props.ActionaddText( e.target.value)
        
    
      
    this.props.ActionEdit(this.props.description);
  };

  render() {
    return (
      <div className="container">
           <h1 style={{ color: "red" }}>Todo App</h1>
        <div className="task-list">
          {this.props.tasks
            .filter(
              el =>
                el.isDone.search(this.props.SearchedName) !== -1 
               
            )
            .map(el => {
              return (
                <div className="task" >
                   <ul class="todoList" style={{ color: "red" }}>
                  <span>
                    <h3> {el.id}. {el.description}: {el.isDone} </h3>
                  </span>
                  
                  <h3 > </h3>
                    
                  <h3>  </h3>
                  </ul>
                </div>
              );
            })}
          <button className="addtask" onClick={() => this.handelButton()} > Add  task
            
          </button>
          <button className="addtask" onClick={() => this.handelEdit()} > Edit  task
            
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.Taskreducer.tasks,
    SearchedName: state.FilterReducerbool,
    description:state.description
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ActionAdd: a => dispatch(ActionAdd(a)),
    ActionEdit: b => dispatch(ActionEdit(b)),
    ActionaddText: value => dispatch(ActionaddText(value))
   
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTask);