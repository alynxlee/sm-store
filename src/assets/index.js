import infoData from "./DB/DetailData.json";
import prdListAll from "./DB/ListData.json";
import prdSidebar from "./DB/DetailData.json";

const { PrdAllInfo } = infoData;
const { ProductAll } = prdListAll;
const { SideBarDes } = prdSidebar;

export function setPrdAllInfo() {
  return PrdAllInfo;
}

export function setProductAll() {
  return ProductAll;
}

export function setSideBarDes() {
  return SideBarDes;
}

export function getItemId(itemId) {
  return PrdAllInfo.find((prdInfo) => prdInfo.id === itemId);
}

export function getAllId(itemId) {
  return ProductAll.find((prdAll) => prdAll.id === itemId);
}

export function getPrdDes(itemId) {
  return SideBarDes.find((sidebar) => sidebar.id === itemId);
}

// 위시리스트
const WISHLIST_KEY = "SMSTORE 위시리스트";
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || "{}");

export function addWishList(itemId) {
  wishlist[itemId] = ProductAll[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function delWishList(itemId) {
  delete wishlist[itemId];
  wishlist[itemId] = ProductAll[itemId];
  localStorage.removeItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return ProductAll.filter((item) => wishlist[item.id]);
}

// 장바구니
const CART_KEY = "SMSTORE CART";
const cart = JSON.parse(localStorage.getItem(CART_KEY) || "{}");

export function addCart(itemId) {
  cart[itemId] = ProductAll[itemId];
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  if (itemId === cart.id) {
    alert("장바구니에 동일한 상품이 있습니다. \n장바구니에 추가하시겠습니까?");
  }
}
// export function delCart(itemId) {
//   delete cart[itemId];
//   cart[itemId] = ProductAll[itemId];
//   localStorage.removeItem(CART_KEY);
// }

export function getCart() {
  return ProductAll.filter((item) => cart[item.id]);
}
export function delCart(itemId) {
  // return ProductAll.filter(item => item.id !== itemId);
  cart[itemId] = ProductAll[itemId];
  localStorage.removeItem(CART_KEY);
}
