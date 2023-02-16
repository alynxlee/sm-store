import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = [
  { id: "" },
  // {
  //   id: "",
  //   img: "",
  //   celeb: "",
  //   title: "",
  //   price: "",
  //   count: 1,
  // },
];

// 장바구니 아이템의 정보를 담고있는 Array
const cartItem = createSlice({
  name: "cartItem", // 사용자 정의 이름
  initialState,
  reducers: {
    // Cart.js에서 장바구니 아이템의 수량을 변경하는 함수
    // action.payload로 장바구니 아이템의 id값 전달받음

    plus(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state[index].count++;
    },
    minus(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      if (state[index].count > 1) {
        state[index].count--;
      }
    },

    // ProductSidebar.js 파일에서 장바구니 담기 버튼 클릭시 동작
    // action.payload로 { id, img, celeb, title, price, count } 값을 가지고 있는 오브젝트를 전달받음
    // 동일 제품이 담길 경우 수량만 +1

    addItem(state, action) {
      const checkItem = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (checkItem === -1) {
        state.push(action.payload);
      } else {
        state[checkItem].count++;
      }
    },

    // Cart.js 파일에서 삭제 버튼 클릭 시 동작
    // action.payload로 해당 아이템의 id값을 전달받음

    deleteItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export let { plus, minus, addItem, deleteItem } = cartItem.actions;

export default cartItem;
