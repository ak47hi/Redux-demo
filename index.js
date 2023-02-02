const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

// Action creator that returns the an object with type property
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// Initial state of the object
const initialState = {
  numOfCakes: 10,
  anotherProp: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
unsubscribe();
