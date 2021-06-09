import React from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import ForYou from '../routes/ForYou';
import Menu from './Menu';
import Navigation from './Navigation';
import Recommendation from './Recommend';
import TrendingPages from './TrendingPages';

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
            <Route path="/">
              <ForYou/>
            </Route>
          </Switch>
        </MainContainer>

        <Recommendation/>


      </StyledMain>

      </DesktopContainer>
    </Router>
  );
}

export default AppRouter;