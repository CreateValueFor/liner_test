라이너 사전과제입니다. 

1st initialize
0609 개발 첫 시작
개발 초기 설정을 위해 
react-router-dom, styled-component 설치

0. 페이지 구조 파악
    헤더 : 
        position : fixed로 구현됨

        position: absolute의 기준점을 만들기 위해 div로 다시 wrap해줌
        3개의 박스로 나뉠 수 있음 
        liner-logo :
            link태그로 구현
            position:absolute
        liner-search-container:
            선택시 모달 창 생성(구현 필수 요소 x)
            검색 버튼 hover 시 음영, pointer: cursor은 없음
        right-button-container:
            upgrade버튼과 종 버튼 모두 hover 기능 존재, pointer: cursor 존재
            종 버튼의 경우 hover 시 설명 띄워줌

    공통 - 좌측의 For You, My Highlights, More:
        react-router-dom의 링크 버튼이 세로로 3개 나열
        flex box의 flex-direction을 이용한 것으로 보임
        hover시 음영 생성
        선택되었을 시 색 변경

    3. 공통 - 우측의 Trending Keywords, Trending Pages
        main 태그 안에 flex로 배치되어 있음
        margin 을 통해 fixed 된 컴포넌트와 겹치지 않게 배열됨



1. 헤더 컴포넌트 생성 
    컴포넌트 파일에 Menu.js 생성
    Input placeholder 색 흐리게 하기, 
    Upgrade 버튼 크기 조정하기

2. 공통 - 좌측의 For You, My Highlights, More 
    컴포넌트 파일에 Navigation.js 생성
    Navigation 함수 안에 links 배열 생성
    links 배열은 link태그의 정보가 담긴 객체들의 배열로 각각의 객체는 id, text, to 속성을 
    갖습니다. 
    메뉴 바에서 선택 시 색깔이 바뀌는 이벤트는 useState와 map을 이용하여 구현하였습니다. 
    onClick 함수를 통해 클릭된 버튼의 아이디 값을 useState에 저장하여
    버튼의 아이디 값이 useState에서 보관중인 아이디 값과 같을 땐 active클래스를 다를 땐 
    inactive 클래스를 추가하였습니다. 
3. 공통 - 우측의 Trending Keywords, Trending Pages
    본래의 라이너 페이지와 달리 Trending Keywords 가 모든 라우트에서 공동되게 구현합니다.
    Router.js에 styled-components를 이용하여 페이지가 바뀌더라도 고정된 위치에 
    렌더링 될 수 있도록 하였습니다. 
    Trending Keywords 안의 키워드의 경우 배열로 저장하고 map함수를 통해 구현하였습니다. 