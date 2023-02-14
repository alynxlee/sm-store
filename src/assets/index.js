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
