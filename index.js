const redux = require("redux");

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action creator that returns the an object with type property
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    quantity: 1,
  };
}

// Action creator to restock cakes
function reStockCake(quantity = 1) {
  return {
    type: CAKE_RESTOCKED,
    quantity: quantity,
  };
}

function restockIcecream(quantity = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    quantity: quantity,
  };
}

// Initial state of the object
const initialState = {
  numOfIcecream: 10,
  numOfCakes: 10,
};

// The reducer function takes in an initial state as default param to the state and an action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.quantity,
      };
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.quantity,
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

const actions = bindActionCreators(
  { orderCake, reStockCake, orderIcecream, restockIcecream },
  store.dispatch
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(reStockCake(2));
// store.dispatch(orderIcecream());
// store.dispatch(restockIcecream(2));

actions.orderCake();
actions.reStockCake(1);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(1);
// after we unsubscribe we can no longer dipatch an action creator as the listener is already unsubscribed
unsubscribe();
