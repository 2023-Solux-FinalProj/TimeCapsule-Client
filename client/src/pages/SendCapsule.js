import React, { useEffect, useState } from 'react';
import '../styles/style-sendcapsule.css';
import CapsuleTop from '../assets/sendcapsule_top.svg';
import CapsuleBottom from '../assets/sendcapsule_bottom.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { post_user } from '../redux/modules/user';

const SendCapsule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    // 3초 후 메인페이지로 이동
    setTimeout(() => {
      dispatch(post_user(token, true));
      navigate('/home');
    }, 7000);
  }, []);

  return (
    <div className={`sendcapsule`}>
      <div className="capsule-image">
        <img src={CapsuleTop} alt="캡슐 뚜껑" className={`capsule-top`} />
        <img class="capsule-bottom" src={CapsuleBottom} alt="캡슐 몸통" />
      </div>

      <p className="complete-text">전송을 완료했습니다!</p>
    </div>
  );
};

export default SendCapsule;
