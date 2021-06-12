import actionTypes from "../actionTypes";

const INITIAL_STATE = {
  userData: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        userData: action.payload,
      };


    case actionTypes.REMOVE_USER:
      return INITIAL_STATE;


    case actionTypes.ADD_TO_RECEPIENTS_ARRAY:
      let temp = state.userData.recepients;
      temp.push(action.payload);
      return {
        userData: {
          ...state.userData,
          recepients: temp,
        },
      };
      
      
      case actionTypes.REMOVE_FROM_RECEPIENTS_ARRAY:
        //   logic to remove specified recepientId from recepients[]

        // let temp = state.userData.recepients;
        // temp.push(action.payload);
        // return {
        //   userData: {
        //     ...state.userData,
        //     recepients: temp,
        //   },
        // };



    default:
      return state;
  }
};

export default userReducer;
