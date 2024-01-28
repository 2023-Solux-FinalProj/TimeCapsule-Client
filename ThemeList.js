import React, { useEffect, useState } from 'react';
// 아이콘
import ThemeIconDefault from '../assets/theme_icon_default.svg';
import ThemeIconTree from '../assets/theme_icon_tree.png';
import ThemeIconRetro from '../assets/theme_icon_retro.svg';
import ThemeIconRetroActive from '../assets/theme_icon_retro_active.svg';
import ThemeIconChat from '../assets/theme_icon_chat.svg';
import ThemeIconNewyear from '../assets/theme_icon_newyear.svg';

// 메인 이미지
import ThemeImageDefault from '../assets/theme_main_default.png';
import ThemeImageRetro from '../assets/theme_main_retro.png';
import ThemeImageChat from '../assets/theme_main_chat_lock.png';
import ThemeImageTree from '../assets/theme_main_tree_lock.png';
import ThemeImageNewyear from '../assets/theme_main_newyear.png';
import ThemeBgDefault from '../assets/bg_theme_default.png';
// 배경 이미지
import ThemeBgTree from '../assets/bg_theme_tree.png';
import ThemeBgRetro from '../assets/bg_theme_retro.png';
import ThemeBgChat from '../assets/bg_theme_chat.png';
import ThemeBgNewyear from '../assets/bg_theme_newyear.png';

import rightArrowRetro from '../assets/ic_arrow_right_retro.svg';
import BasicButton from '../components/common/BasicButton';

import '../styles/style-theme.css';

import ThemeSwiper from '../components/ThemeSwiper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { update_theme } from '../redux/modules/capsule';

// 테마 리스트
const themes = [
  {
    id: 0,
    name: '기본',
    icon: ThemeIconDefault,
    iconActive: ThemeIconDefault,
    image: ThemeImageDefault,
    bgImage: ThemeBgDefault,
  },

  {
    id: 1,
    name: '설날',
    icon: ThemeIconNewyear,
    iconActive: ThemeIconNewyear,
    image: ThemeImageNewyear,
    bgImage: ThemeBgNewyear,
  },
  {
    id: 2,
    name: '레트로 게임',
    icon: ThemeIconRetro,
    iconActive: ThemeIconRetroActive,
    image: ThemeImageRetro,
    bgImage: ThemeBgRetro,
  },
  {
    id: 3,
    name: '크리스마스',
    icon: ThemeIconTree,
    iconActive: ThemeIconTree,
    image: ThemeImageTree,
    bgImage: ThemeBgTree,
  },
  {
    id: 4,
    name: '어쩌면..진짜 과거',
    icon: ThemeIconChat,
    iconActive: ThemeIconChat,
    image: ThemeImageChat,
    bgImage: ThemeBgChat,
  },
];

const ThemeList = () => {
  const navigate = useNavigate();

  const [styleClassName, setStyleClassName] = useState('theme-style-0');
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleThemeChange = (index) => {
    setCurrentThemeIndex(index);
    setStyleClassName(`theme-style-${index}`);
  };

  // handle capsule theme redux store state
  const dispatch = useDispatch();
  const handleNextBtn = (currentThemeIndex) => {
    switch (currentThemeIndex) {
      case 0:
        dispatch(update_theme('default'));
        break;
      case 1:
        dispatch(update_theme('newyear'));
        break;
      case 2:
        dispatch(update_theme('retro'));
        break;
      default:
        return;
    }
    navigate('/create/add');
  };

  const currentTheme = themes[currentThemeIndex];
  return (
    <div className={`theme-style-common ${styleClassName}`}>
      <div className={`theme-list-container`}>
        <h2>새로운 캡슐 보내기</h2>
      
        <h4>캡슐 테마를 선택해 주세요</h4>
        {/* --- 테마선택 스크롤 ----*/}
        <div className="theme-swiper">
          <ThemeSwiper
            onClick={handleThemeChange}
            themes={themes}
            currentThemeIndex={currentThemeIndex}
          />
        </div>

        {/* ---- 테마 미리보기 ---- */}
        <div className="theme-main-image">
          <p className="theme-title">{currentTheme.name}</p>
          <img
            className="theme-image"
            src={currentTheme.image}
            alt={currentTheme.name}
          />
        </div>
        
        {/* ---- 다음 단계로 --- */}
        <div className="theme-button-container">
          {currentThemeIndex < 2 && (
            <BasicButton
              onClick={() => handleNextBtn(currentThemeIndex)}
              buttonWidth="100%"
              buttonHeight="70px"
              fontSize="20px"
            >
              <p>다음 단계로 &gt;</p>
            </BasicButton>
          )}
          {currentThemeIndex === 2 && (
            <div
              className={`next-button }`}
              onClick={() => handleNextBtn(currentThemeIndex)}
            >
              <p>
                다음 단계로 <img src={rightArrowRetro} alt="오른쪽 화살표" />
              </p>
            </div>
          )}

          {/* {currentThemeIndex === 4 && (
            <div className="next-button">
              <p>다음 단계로</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ThemeList;
