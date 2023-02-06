const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const UPDATESTREET = "UPDATESTREET";

const initialState = {
  name: "Akhilesh",
  address: {
    street: "84 Minnesota ave",
    city: "buffalo",
    state: "New York",
  },
};

function udpateStreet(street) {
  return {
    type: UPDATESTREET,
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESTREET:
      //   return {
      //     ...state,
      //     address: { ...state.address, street: action.payload },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log("initial state", store.getState());

const unSubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(udpateStreet("99 Merrimac street"));
unSubscribe();
