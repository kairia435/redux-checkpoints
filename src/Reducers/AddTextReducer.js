const initState = {
    tasks: [
      { id: 1, description: "pass the exam", isDone: "done" },
      { id: 2, description: "read a book", isDone: "not" },
      { id: 3, description: "code web app", isDone: "done" }
    ]
  };


const AddTextReducer = (state = initState, action) => {
    if (action.type === "ACTION_Edit") {
        return {
            ...state,
            description:action.payload,
            
          };
        }
        return state;
      
    }
  
   

  
  export default AddTextReducer;