const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCKCAKE";

// Action creator that returns the an object with type property
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function reStockCake(quantity = 1) {
  return {
    type: RESTOCK_CAKE,
    quantity: quantity,
  };
}

// Initial state of the object
const initialState = {
  numOfCakes: 10,
  anotherProp: 0,
};

// The reducer function takes in an initial state as default param to the state and an action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    default:
      return state;
  }
};

//Creating a store
const store = createStore(reducer);

console.log("Initial state", store.getState());

// The below variable 'unsubsribe' handles the unregistering of listener,
// as the redux store handles unregistering of listeners via the function returned by subscribe(listener)
const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(reStockCake(2));
store.dispatch(reStockCake(2));

// after we unsubscribe we can no longer dipatch an action creator as the listener is already unsubscribed
unsubscribe();
