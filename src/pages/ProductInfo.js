import { getItemId } from '../assets';
import { useParams } from 'react-router-dom';

function ProductInfo() {
  const path = process.env.PUBLIC_URL;
  const { itemId } = useParams();

  const item = getItemId(itemId);

  const { id, mainImg, detail } = item;

  const filterDetail = detail.filter(el => el !== null);
  return (
    <div className="prdInfoWrapper">
      <div className="prdInfo">
        <div className="mainImgWrapper">
          <img src={path + `/images/${mainImg}`} alt={`product` + id} />
        </div>
        <div className="detailImgWrapper">
          <img src={path + `/images/detailCommon.jpg`} alt="common" className="commonImg" />
          <div>
            {filterDetail.map(el => {
              return (
                <img src={path + `/images/${el}`} alt="detail" key={el.idx} className="detailImg" />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
