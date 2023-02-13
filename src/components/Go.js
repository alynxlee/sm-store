import { useEffect, useRef, useState } from 'react';
import '../styles/go.scss';

import { ReactComponent as TopBtn } from '../assets/images/goUp.svg';
import { ReactComponent as DownBtn } from '../assets/images/goDown.svg';

function Go() {
  const [isScroll, setIsScroll] = useState(false);
  const [isBtnHover1, setIsBtnHover1] = useState('');
  const [isBtnHover2, setIsBtnHover2] = useState('');
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScroll(window.scrollY > 3330);
    });
    btnRef1.current.addEventListener('mouseenter', () => {
      setIsBtnHover1(!isBtnHover1);
    });
    btnRef1.current.addEventListener('mouseleave', () => {
      setIsBtnHover1(isBtnHover1);
    });
    btnRef1.current.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    btnRef2.current.addEventListener('mouseenter', () => {
      setIsBtnHover2(!isBtnHover2);
    });
    btnRef2.current.addEventListener('mouseleave', () => {
      setIsBtnHover2(isBtnHover2);
    });
    btnRef2.current.addEventListener('click', () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  }, []);
  return (
    <div className={`goWrapper ${isScroll ? 'goWrapper absolute' : 'goWrapper'}`}>
      <div className="goUp">
        <div className="topBtn">
          <TopBtn
            fill="#3E435F"
            opacity={isBtnHover1 ? '1' : '0.6'}
            style={{ transition: '0.6s' }}
            ref={btnRef1}
          />
        </div>
      </div>
      <div className="goDown">
        <div className="DownBtn">
          <DownBtn
            fill="#3E435F"
            opacity={isBtnHover2 ? '1' : '0.6'}
            style={{ transition: '0.6s' }}
            ref={btnRef2}
          />
        </div>
      </div>
    </div>
  );
}

export default Go;
