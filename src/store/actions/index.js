export const addCart = product => {
  return {
    type: 'ADD_ITEM',
    payload: product,
  };
};

export const deleteCart = product => {
  return {
    type: 'DELETE_ITEM',
    payload: product,
  };
};

// export const adjustQty = (product, qty) => {
//   return {
//     type: 'ADJUST_QTY',
//     payload: {
//       id: product,
//       qty,
//     },
//   };
// };

// export const loadCurrent = product => {
//   return {
//     type: 'LOAD_CURRENT',
//     payload: product,
//   };
// };
