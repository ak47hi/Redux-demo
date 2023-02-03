const redux = require("redux");
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
    street: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATESTREET:
      return { ...state, address: { ...state.address, street: action.street } };
  }
};
const store = createStore(reducer);

const unSubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(udpateStreet("99 Merrimac street"));
unSubscribe();
