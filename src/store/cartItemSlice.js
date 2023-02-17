import { createSlice } from '@reduxjs/toolkit';

// 초기값
const initialState = {
  // cart: localStorage.getItem('SMSTORE 장바구니')
  //   ? JSON.parse(localStorage.getItem('SMSTORE 장바구니'))
  //   : [],
  // cartTotalQty: 0,
  // cartTotalAmount: 0,
};

// 장바구니 아이템의 정보를 담고있는 Array
const cartItem = createSlice({
  name: 'cartItem', // 사용자 정의 이름
  initialState,
  reducers: {
    // Cart.js에서 장바구니 아이템의 수량을 변경하는 함수
    // action.payload로 장바구니 아이템의 id값 전달받음

    // plus(state, action) {
    //   const index = state.findIndex(item => item.id === action.payload);
    //   state[index].count++;
    // },
    // minus(state, action) {
    //   const index = state.findIndex(item => item.id === action.payload);
    //   if (state[index].count > 1) {
    //     state[index].count--;
    //   }
    // },

    // ProductSidebar.js 파일에서 장바구니 담기 버튼 클릭시 동작
    // action.payload로 { id, img, celeb, title, price, count } 값을 가지고 있는 오브젝트를 전달받음
    // 동일 제품이 담길 경우 수량만 +1

    addItem(state, action) {
      const checkItem = state.findIndex(item => item.id === action.payload.id);
      // 이미 장바구니에 있다면
      if (checkItem >= 0) {
        state.cart[checkItem].cartQty += 1;
        // 장바구니에 없다면
      } else {
        const tempProduct = { ...action.payload, cartTotalQty: 1 };
        state.cart.push(tempProduct);
      }
    },

    // Cart.js 파일에서 삭제 버튼 클릭 시 동작
    // action.payload로 해당 아이템의 id값을 전달받음

    deleteItem(state, action) {
      const index = state.cart.filter(item => item.id !== action.payload.id);
      state.cart = index;
      localStorage.setItem('SMSTORE 장바구니', JSON.stringify(state.cart));
    },

    // 장바구니 아이템 개수 감소
    decreaseCart(state, action) {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (state.cart[index].cartQty > 1) {
        state.cart[index].cartQty -= 1;
      } else if (state.cart[index].cartQty === 1) {
        const nextCartItems = state.cart.filter(item => item.id !== action.payload.id);
        state.cart = nextCartItems;
      }
      localStorage.setItem('SMSTORE 장바구니', JSON.stringify(state.cart));
    },
  },
});

export let { plus, minus, addItem, deleteItem } = cartItem.actions;

export default cartItem;
