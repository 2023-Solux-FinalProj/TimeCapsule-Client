<div align='center'>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/dda7aa86-84ed-44ec-9f73-78eb05de4dc3"/>
</div>
<br/>  
<br/>

## ✨ 프로젝트 소개
- **과거에서 온 편지**는 🚀 타임캡슐 🚀 컨셉 을 기반으로 추억에 대한 감상을 사용자간 송수신할 수 있는 서비스입니다.
- 소위 '추억팔이 👵🏻 🫧' 라고 불리는 노스탤지어를 계기로 서비스를 기획했습니다.
- 타임캡슐은 `이미지`, `텍스트`, `음악`을 포함한 포토덤프 형태로 모아볼 수 있습니다.
- 전송자 본인을 포함한 특정 사용자가 지정한 날짜에 타임캡슐을 조회할 수 있도록 설계했습니다.
  
<br/>  
<br/>

## 💖 Speical Thanks to
이틀간 '과거에서 온 편지' 를 이용해준 98명의 유저들과 사용 피드백
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/b53789ea-7f5c-4e64-8c03-b9643cdf2cc1" width="350" />
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/ad99ed31-a2dd-4d28-b530-f8cb5b111290" width="270" />
</div>  
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/018ceca4-81ff-4cae-b6fa-fdf1b9767239" width="500"/>
</div>



## 🙋‍♀️ 팀원 및 역할
<table>
  <tbody>
    <tr>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/8c5894a8-2e8c-41cb-8378-2fde04e983ad" height="100px;" alt=""/><br /><sub>
        <b>[FE] 김소연 </b><br/>테마선택, 전송완료 UI</sub><br /></td>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/a011652d-78a8-4753-9d46-d5cd0a663abe" height="80px;" alt=""/><br /><sub><b>[FE] 이선아 </b><br/>스플래시, 홈, 캡슐 생성, 전송 UI<br/>서버 연동 API, 전역 상태 관리<br/>AWS S3 이미지 저장</sub><br /></td>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/4d320796-7bf7-4d88-8980-bf5a30e3352a" height="100px;" alt=""/><br /><sub><b>[FE] 황영서 </b><br/>캡슐 리스트, 캡슐 상세 UI</sub><br /></td>
     <tr/>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/ab9dd76e-755d-4a8f-aa20-77ef46675d84" height="100px;" alt=""/><br /><sub><b>[BE] 권승연 </b><br/>AWS RDS, EC2 서버 무중단 배포</sub><br /></td>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/150cf992-99c9-401f-81f9-61b495528f32" height="100px;" alt=""/><br /><sub><b>[BE] 김민진 </b><br/>DB설계, 사용자 관련 API<br/>AWS S3 이미지 저장</sub><br /></td>
      <td align="center"><img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/1c44ada3-bedf-466e-a2d6-51788d06aa9c" height="100px;" alt=""/><br /><sub><b>[BE] 손채민 </b><br/>캡슐 데이터 관련 API<br/>AWS S3 이미지 저장</sub><br /></td>
    </tr>
  </tbody>
</table>  

<br/>  
<br/>  

## 🛠️ 개발 환경
### Front-end
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
<div>
  <ul>
    <li>컴포넌트화를 통해 추후 유지보수와 재사용성을 고려</li>
    <li>Custom Hook을 통한 삭제 기능 구현 및 </li>
    <li>미디어 쿼리를 통해 다양한 모바일 디바이스 대응</li>
    <li>styled-components를 활용하여 props를 통해 페이지 용도에 따른 스타일링 적용</li>
    <li>Redux를 사용한 사용자 정보, 새로 생성할 캡슐 정보 모듈화 및 관리, redux-thunk와 axios를 통한 api 연동</li>ㄹ
  </ul>
</div>


### Back-end
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"/><img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/><img src="https://img.shields.io/badge/amazon aws-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"/>

### 협업 tool
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<div>
  <ul>
    <li>Notion을 활용한 작업 상황 및 참고 자료, 개발 컨벤션 공유</li>
    <li>Git과 Github를 활용한 버전 관리</li>
  </ul>
</div>



<br/>  
<br/>  


## 🎨 디자인 시스템
<img src=https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/27e6e657-8e5d-4627-a159-0bb77bd29fa1/ width="700" height="497.78">


<br/>  
<br/>

## 🕹️ 페이지별 기능
### [시작화면]
1. 서비스 이용을 원하는 유저는 `카카오 소셜 로그인` 을 통해 간편하게 로그인/회원가입을 할 수 있습니다.
2. 로그인한 유저는 `도착한 캡슐 개수` 를 확인할 수 있습니다.
3. 계절과 트렌드를 반영한 `다양한 테마`가 반영된 시작 화면을 통해 서비스가 가진 감성을 유저가 즐길 수 있도록 디자인했으나 구현되어 있진 않습니다.
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/6441e35b-4335-4c55-b589-fb589883cf60" width="190" height="411.18"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/726d754e-0217-47a1-9918-75d4acbe341d" width="190" height="411.18"/>
   <div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/04942398-cc81-4f30-87d8-5e1d7cec23fe" width="190" height="411.18"/>
   <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/c352baa6-ea03-4aea-9582-3a1f9ec3b8fa" width="190" height="411.18"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/94245c04-130c-4fc6-adf0-5794093f3ec8" width="190" height="411.18"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/b879d374-bc0f-4c91-876d-76537a6d2a3b" width="190" height="411.18"/>
</div>
</div>  

### [새로운 캡슐 생성]
1. `캡슐 테마` 를 선택할 수 있습니다. 🎮 레트로 🎮 테마 선택시 캡슐 조회에서 테마가 적용된 ui를 확인할 수 있습니다. 
2. 갤러리에 저장된 `사진`을 첨부하고 `텍스트`를 입력하여 포토 카드를 최대 5장 생성할 수 있습니다.
3. 유튜브 링크를 첨부하여 캡슐 조회시 `음악`을 자동 재생할 수 있습니다.
4. 카드를 길게 누르면 `삭제` 할 수 있습니다. 
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/cd649161-cbb0-4b40-aed6-96bd480667c1" width="200"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/814bb11e-bf59-4e99-a499-4302fc15056d" width="200"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/117933bf-9e75-49b2-a537-a7083980114c" width="200"/>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/1cce8167-16ea-49b2-911e-128df61841ce" width="200"/>
</div>

### [캡슐 전송]
1. 캡슐 `도착일`과 `수신자` 이메일을 입력합니다. 본인을 포함한 여러 사용자 이메일을 추가할 수 있습니다.
2. 캡슐 전송이 완료되면 `시작화면으로 이동`합니다.
3. `나에게 보내기`를 선택했기 때문에 도착한 캡슐 개수가 늘어있는 것을 확인할 수 있습니다.
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/cbdcac3f-2d30-4946-b404-5b1591263a02" width="200" />
</div>

### [캡슐 목록 및 내용 확인]
1. 시작화면에서 `전체 보기` 페이지로 이동합니다.
2. `확인하지 않은 캡슐 조회` 후, 다시 돌아오면 해당 캡슐은 `확인한 캡슐로 이동`합니다.
<div>
  <img src="https://github.com/2023-Solux-FinalProj/TimeCapsule-Client/assets/126681896/bc7c4301-35b1-4a6f-8c0a-94df789bba33" width="200" />
</div>  
<br/>  
<br/>

## 👩‍🔧 개선 목표
1. Custom Hook과 util function 분리
2. 리액트 렌더링 최적화 방안 모색
3. 시작화면과 캡슐 조회에서 다양한 캡슐 테마 ui 적용 구현

