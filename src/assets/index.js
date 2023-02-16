import infoData from "./DB/DetailData.json";
import prdListAll from "./DB/ListData.json";
import prdSidebar from "./DB/DetailData.json";
import WishList from "../pages/WishList";

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
  wishlist[itemId] = ProductAll[itemId].title;
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function delWishList(itemId) {
  delete wishlist[itemId];
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}

export function getWishlist() {
  return ProductAll.filter((item) => wishlist[item.id]);
}
