import actionTypes from "../actionTypes";

const INITIAL_STATE = { recepientData: [] };

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECEPIENT:
      let newrecepientData = [...state.recepientData];
      // newrecepientData.push(action.payload); //also manage if payload=[{},{}..]
      action.payload.length? newrecepientData.push(...action.payload): newrecepientData.push(action.payload);
      return {
        recepientData: newrecepientData,
      };
        

    default:
      return state;
  }
};

export default dataReducer;
