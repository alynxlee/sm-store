import infoData from './DB/DetailData.json';
import prdListAll from './DB/ListData.json';

const { PrdAllInfo } = infoData;
const { ProductAll } = prdListAll;

export function setPrdAllInfo() {
  return PrdAllInfo;
}

export function setProductAll() {
  return ProductAll;
}

export function getItemId(itemId) {
  return PrdAllInfo.find(prdInfo => prdInfo.id === itemId);
}

export function getAllId(itemId) {
  return ProductAll.find(prdAll => prdAll.id === itemId);
}
