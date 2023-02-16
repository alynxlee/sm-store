// const INITIAL_STATE = {};

// const cartReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [...state, action.payload];
//     case 'DELETE_ITEM':
//       return [...action.payload];
//     default:
//       return state;
//   }
// };
const INITIAL_STATE = [{ id: '', img: '', celeb: '', title: '', price: '', qty: '' }];
const cartReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'addItem') {
    let item = action.payload.findId;
    let newState = [...state];
    newState.push({
      id: item.id,
      img: item.img,
      celeb: item.celeb,
      title: item.title,
      price: item.price,
      qty: 1,
    });
    return newState;
  } else if (action.type === 'plus') {
    let id = action.payload;
    let newState = [...state];
    newState[id].qty++;
    return newState;
  } else if (action.type === 'minus') {
    let id = action.payload;
    let newState = [...state];
    newState[id](el => {
      if (el.qty > 0) {
        el.qty--;
      }
    });
    return newState;
  } else {
    return state;
  }
};

export default cartReducer;
