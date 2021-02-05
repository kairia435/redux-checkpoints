const FilteReducerbool = (state = "", action) => {
    if (action.type === "ACTION_NAME") {
      return action.payload;
    }
    return state;
  };
  
  export default FilteReducerbool ;