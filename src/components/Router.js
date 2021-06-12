import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Detail from '../routes/DetailForYou';
import DetailHighlight from '../routes/DetailHighlight';
import ForYou from '../routes/ForYou';
import More from '../routes/More';
import MyHighlights from '../routes/MyHighlights';
import Menu from './Menu';
import Navigation from './Navigation';
import Recommendation from './Recommend';
import Relevant from './Relevant';


const DesktopContainer = styled.div`
  width:1280px;
  margin: 0 auto;
`;

const StyledMain = styled.main`
	
  display: flex;
  flex-direction: row;
	margin-top: 64px;
	margin-left: 224px;
	box-sizing: border-box;
`;

const MainContainer = styled.div`
	width: 712px;
	height: 100%;
	margin-bottom: 100px;
	display:flex;
	box-sizing: border-box;
`;



function AppRouter() {
  
  return (
    <Router>
      <DesktopContainer>
        <Menu/>
        <Navigation/>
      
      <StyledMain>
        <MainContainer>
          <Switch>
            <Route exact path="/home">
              <ForYou/>
            </Route>
            <Route path="/myhighlights/highlights">
              <MyHighlights/>
            </Route>
            <Route path="/more">
              <More/>
            </Route>
            <Route path="/home/pages/:id" component={Detail}/>
            <Route path="/myhighlights/pages/:id" component={DetailHighlight}/>
          </Switch>
        </MainContainer>


          <Route path="/home/pages" component={Relevant}/>
          {/* <Route path='/' component={Recommendation}/> */}
          



      </StyledMain>

      </DesktopContainer>
    </Router>
  );
}

export default AppRouter;