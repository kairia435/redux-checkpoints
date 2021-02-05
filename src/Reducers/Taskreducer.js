
const initState = {
  tasks: [
    { id: 1, description: "pass the exam", isDone: "done" },
    { id: 2, description: "read a book", isDone: "not" },
    { id: 3, description: "code web app", isDone: "done" }
  ]
};

const Taskreducer = (state = initState, action) => {
  if (action.type === "ACTION_ADD") {
    let NewTask = { tasks: [...state.tasks, action.payload] };
    state = NewTask;
    return state;
  }

  return state;
};

export default Taskreducer;