import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinerHeader = styled.div`
  width: 1280px;
  height: 64px;
  background-color: #fff;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  
  .header-container{
    position:relative;
    width:1280px;
    height: 64px;
    display:flex;
    align-items:center;

    a{
      position: absolute;
      left:0;
      width: 32px;
      height:32px;
      background: url('https://getliner.com/src/images/liner-logo.svg') no-repeat;
      background-size : 32px;
      text-decoration: none;
      cursor: pointer;
    }
  }

`;

const SearchContainer = styled.div`
  width:1280px;
  height: 40px;
  div{
    width: 800px;
    min-height:40px;
    position: absolute;
    left: 240px;
    display:flex;
    form{
      input{
        width: 680px;
        border-radius: 8px;
        background-color: #eef1f4;
        font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
        line-height: 1.2;
        font-size: 16px;
        color: #333;
        padding: 10px 54px 11px 16px;
        border: none;
        outline: none;
        box-sizing:border-box;
      }
    }
    span{
      background: url('https://getliner.com/src/images/search.svg') no-repeat;
      width:32px;
      height: 32px;
      background-size: 24px;
      background-position: 50%;
      border-radius:50%;
      align-self:center;
      left: -40px;
      position:relative;
      //input과 겹쳐있기 때문에 z-index로 앞으로 꺼내줍니다.
      z-index: 1;
      &:hover{
        background-color: #dde1e7;

      }
    }
  }
`;

const RightButtonContainer = styled.div`
  display:flex;
  align-items:center;
  position: absolute;
  right:0;
  button{
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    box-sizing: border-box;
  }
  button:first-child{
    height: 32;
    margin: 4px 24px 4px 212px;
    padding: 7px 20px;
    border-radius: 8px;
    background-color: #33cac6;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    color: #fff;
    box-sizing:border-box;
    &:hover{
      background-color: #00bdb8;
    }
  }
  button:last-child{
    background-image: url('https://getliner.com/src/images/noti.svg');
    width: 32px;
    height: 32px;
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    &:hover{
      border-radius:50%;
      background-color:#f6f8fa;
    }
  }
`;

function Menu() {
  const onSubmit = (event) =>{
    event.preventDefault();
  }
  return (
    <LinerHeader>
      <div className="header-container">
        <Link
          to="/home"
        />
        <SearchContainer>
          <div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Search on LINER"
                
              />
            </form>
            <span></span>
          </div>
        </SearchContainer>
        <RightButtonContainer>
          <button>Upgrade</button>
          <button></button>
        </RightButtonContainer>
      </div>
    </LinerHeader>
  );
}

export default Menu;