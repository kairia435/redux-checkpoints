const initState = {
    tasks: [
      { id: 1, description: "pass the exam", isDone: "done" },
      { id: 2, description: "read a book", isDone: "not" },
      { id: 3, description: "code web app", isDone: "done" }
    ]
  };


const TaskEditReducer = (state = initState, action) => {
    if (action.type === "ACTION_Edit") {
        return {
            ...state,
            description: state.tasks[action.payload],
            
          };
        }
        return state;
      
    }
  
   

  
  export default TaskEditReducer;