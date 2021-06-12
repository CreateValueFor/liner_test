라이너 사전과제입니다. 

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

    공통 - 우측의 Trending Keywords, Trending Pages
        main 태그 안에 flex로 배치되어 있음
        margin 을 통해 fixed 된 컴포넌트와 겹치지 않게 배열됨
    
    For You 탭
        모달, 드롭다운, 버튼 색 변환까지 구현
        제목 클릭 시 Detail Page로 이동할수 있도록
        i 버튼을 누르면 Lottie파일로 구현
        For you 탭은 스크롤 내리면 작게 변해서 sticky로 변함
        languages는 그냥 스티키
        제목 태그 이후 그냥 리스트로 구현하면 될듯 map으로
    My Highlights 탭
        page, filter, search까지 
        for you탭과 제목은 유사 
        페이지 리스트도 매우 유사하므로 복사하고 수정하면 될 듯

## 1. 공통 - Header

- 버튼들과 검색창 배치만 해주세요. 작동은 하지 않아도 됩니다.
=> flex박스, position속성을 이용하여 배치하였습니다. input박스의 경우 ::placeholder가상선택자를 이용하여 opacity를 낮춰 흐리게 구현하였습니다. 

## 2. 공통 - 좌측의 For You, My Highlights, More

- 3개의 탭이 세로로 배치되어있습니다.
=> 플렉스 박스를 이용하여 세로로 배치하였습니다. 버튼이 클릭되면 클래스를 변경해주는 방식을 이용하여 버튼 클릭을 구현하였습니다. 

## 3. 공통 - 우측의 Trending Keywords, Trending Pages

- 라이너 서비스 전반에서 인기 있는 키워드와 페이지의 목록입니다.
- Hover까지 구현해주세요.
=> keywords와 pages 각각 리스트에 담아 map 함수를 이용하여 구현하였습니다. pages의 경우 가독성을 위해 PageLink라는 함수로 모듈화시켰습니다.


## 4. For You 탭

- 하이라이트에 기반한 추천 페이지 목록이 리스트 형태로 뜨는 탭입니다.
=> 페이지 목록을 pages리스트에 객체 형태로 담고, PagesArticle 함수를 작성하여 모듈화 시킨 뒤 map함수로 구현하였습니다. 

- 추천 페이지의 버튼들 클릭 시 나오는 Modal View, Dropdown Menu까지 구현해주세요.
=> 모달의 경우 다른 페이지 혹은 버튼을 눌렀을 시 출력되는 레이아웃이 공통되기 때문에 모달 틀을 만들고 모달 호출 시마다 어떤 버튼에서 눌렸는지에 대한 정보를 전달하여 각기 다른 출력이 나올 수 있도록 했습니다. 
=> 드롭다운 메뉴는 useState함수를 이용하여 클릭 시마다 열고 닫기가 이루어지도록 했습니다.

- 추천 페이지의 '제목'을 클릭하면 6. Detail Page로 이동시켜주세요.
=> 제목 클릭 시 react-router의 Link태그를 이용하여 클릭된 페이지 정보를 같이 전달하여 각 페이지마다 다른 정보가 출력되도록 하였습니다. 

- i 버튼을 눌렀을 때 재생되는 애니메이션은 아래 첨부된 Lottie 파일(JSON)로 구현해주세요.
=> react-lottie를 이용하여 구현하였습니다. useState를 이용하여 클릭 시 재생, 멈춤을 구현하였습니다.


## 5. My Highlights 탭

- 내가 하이라이팅 한 페이지의 목록이 뜨는 탭입니다.
=> 임의로 Foryou 페이지에서 이용한 pages리스트를 export 하여 재활용하였습니다. 
- My Highlights 탭 내의 'Pages, Filter, Search' 클릭 시 나오는 Dropdown Menu, UI 변화까지 구현해주세요.
=> 페이지에 마우스를 호버 할 때만 체크 버튼이 렌더링 되도록 onMouseEnter, onMouseLeave를 사용하였습니다. 
페이지 클릭 시 filter함수를 이용하여 클릭 된 페이지의 수를 구해 1개 이상이 클릭 될 시 UI가 변하도록 하였습니다. 
UI가 변한 상태에서 x버튼을 누르면 초기화되도록 map함수를 이용하였습니다. 
filter은 위에 명세된 4번에서 모달을 구현한 방식과 동일합니다. 
search클릭을 useState로 관리하여 UI 변화를 구현하였습니다.

- 내가 하이라이팅 한 페이지의 버튼들(공유, ...) 클릭 시 나오는 Modal View, Dropdown Menu까지 구현해주세요.
=> 상기에서 모달창, 드롭다운 메뉴를 구현한 방식과 동일합니다.

- 내가 하이라이팅 한 페이지의 '제목'을 클릭하면 6. Detail Page로 이동시켜주세요.
=> 명세된 4번에서 한 방식과 동일합니다. 

- i 버튼을 눌렀을 때 재생되는 애니메이션은 아래 첨부된 Lottie 파일(JSON)로 구현해주세요.
=> 명세된 4번에서 한 방식과 동일합니다. 


## 6. 공통 - Detail Page

- 추천 페이지 / 내가 하이라이팅한 페이지를 클릭했을 때 나오는 화면입니다. 페이지의 상세 정보를 보여줍니다.
=> 이전 페이지에서 전달된 page 속성을 이용하여 페이지의 상세 정보를 호출하였습니다.

- 뒤로가기, 북마크, 공유, ... 버튼 클릭 시 각각 1차적인 단계까지 작동하게 해주세요(뒤로가기, 북마크 아이콘 변화, Modal View 뜨기, Dropdown Menu 뜨기)
=> 뒤로가기는 react-router에서 제공하는 history객체의 goBack()을 이용하여 구현하였습니다. 북마크, 공유, ...버튼의 경우 상기와 동일합니다. 

- 내가 하이라이팅한 페이지의 경우에도 추천 페이지와 유사하게 구현해주세요.
=> 이전 페이지의 컴포넌트를 export 하여 재사용하여 구현하였습니다.

- 페이지 정보는 아래와 같이 구성되어 있습니다.
- (Optional) Highlight들
- View Original → 클릭하면 새 탭에서 페이지로 이동
- (Optional) Meta Data(Description, Author, ...)
=> view original의 경우 a태그의 target= _blank를 이용하여  새 탭에서 페이지가 열리도록 하였습니다. 
나머지는 컴포넌트가 호출될 때 전달한 pages 리스트를 이용하여 구현하였습니다.
- 추천 페이지의 경우
- 우측 Column(위에 명세된 3번)이 Trending XX에서 Relevant XX로 바뀝니다.
=> react-router에서 추천페이지에서 디테일 페이지로 접근된 경우에만 렌더링되도록 하였습니다.

- 페이지 정보 하단에 Relevant Pages가 리스트 형태로 노출됩니다.
=> 이전에 사용한 pages 리스트를 재활용하였습니다.

- 내가 하이라이팅 한 페이지에는 Relevant Pages가 없습니다.