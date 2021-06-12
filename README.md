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
    
    4. For You 탭
        모달, 드롭다운, 버튼 색 변환까지 구현
        제목 클릭 시 Detail Page로 이동할수 있도록
        i 버튼을 누르면 Lottie파일로 구현
        For you 탭은 스크롤 내리면 작게 변해서 sticky로 변함
        languages는 그냥 스티키
        제목 태그 이후 그냥 리스트로 구현하면 될듯 map으로
    5. My Highlights 탭
        page, filter, search까지 
        for you탭과 제목은 유사 
        페이지 리스트도 매우 유사하므로 복사하고 수정하면 될 듯



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
    history객체를 이용해서 변경하는 방식으로 변경!!

3. 공통 - 우측의 Trending Keywords, Trending Pages
    본래의 라이너 페이지와 달리 Trending Keywords 가 모든 라우트에서 공동되게 구현합니다.
    Router.js에 styled-components를 이용하여 페이지가 바뀌더라도 고정된 위치에 
    렌더링 될 수 있도록 하였습니다. 
    Trending Keywords 안의 키워드의 경우 배열로 저장하고 map함수를 통해 구현하였습니다. 
    0610show-more까지 구현 완료

4. For You 탭
    useState와 논리연산자를 이용하여 lottie모달창을 구현하였습니다.
    home_signal.json파일을 lotties파일에 저장하고 react-lotties 라이브러리를 이용하여
    lottie를 구현하였습니다. 
    언어 드롭다운 메뉴의 경우 useState에 언어, id, done의 정보를 담은 객체들의 배열을 저장하여 토글될때마다 done의 값이 반전되도록 하였습니다. 
    % 수정 필요
    모달 영역 밖 클릭 시 닫기를 구현하기 위해 useRef와 useEffect를 이용하였습니다. 
    axios 와 cheerio를 이용하여 데이터를 fetch해오려 했지만 cors error발생
    리스트 항목들은 내용이 바뀔 수 있는지를 여부로 map 함수를 구현하였습니다.
    모달 창 밖 클릭시 닫히도록 수정 필요
    마우스 호버 시 텍스트 보이게 하기 수정 필요
    모달 컴포넌트를 재사용하기 위해 클릭된 버튼에 따라 모달에 클래스를 설정해주는 기능을 구현하였씁니다. 

5. My Highlights 탭
    For you 에서 구현한 pages, PageArticle함수를 이용하여 구현
    filter함수를 이용하여 선택됬ㅇ르 경우 UI가 변경되도록 설정하였습니다. 
    이미지 클릭 시 hover안되면 안보이는 거 수정 필요
