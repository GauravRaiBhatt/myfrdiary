import actionTypes from "../actionTypes";

const INITIAL_STATE = { recepientData: [] };
let newrecepientData;

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_RECEPIENT:
       newrecepientData = [...state.recepientData];
      action.payload.length
        ? newrecepientData.push(...action.payload)
        : newrecepientData.push(action.payload);
      return {
        recepientData: newrecepientData,
      };

    case actionTypes.REMOVE_ONERECEPIENT:
      newrecepientData = [
        state.recepientData.filter((recepient) =>
          recepient.recepientId === action.payload ? "" : recepient
        ),
      ];
      return {
        recepientData: newrecepientData,
      };

    case actionTypes.REMOVE_ALLRECEPIENTS:
      return {
        recepientData: [],
      };

    default:
      return state;
  }
};

export default dataReducer;
