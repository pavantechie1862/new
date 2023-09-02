import { setCurrentUser } from "../Actions/actionTypes";

const initialState = {
  userName: null,
  email: null,
  imageUrl: null,
  id: null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCurrentUser.SET_CURRENT_USER: {
      if (action.payload === null) {
        return {
          ...state,
          username: null,
          email: null,
          imageUrl: null,
          id: null,
        };
      } else {
        const { displayName, email, photoURL, uid } = action.payload;
        return {
          ...state,
          userName: displayName,
          email: email,
          imageUrl: photoURL,
          id: uid,
        };
      }
    }
    default:
      return state;
  }
};

export default currentUserReducer;
