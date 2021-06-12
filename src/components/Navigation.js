import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.div`
	width: 216px;
  position: fixed;
  top: 98px;
  margin-left: -16px;
  z-index: 1;
	display:flex;
	flex-direction:column;

	.active{
		color: #00bdb8;
    font-weight: 700;
	}

	a{
		width: 232px;
    height: 51px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.4px;
    color: #787d86;
    cursor: pointer;
    flex-shrink: 0;
		text-decoration:none;

		&:hover{
			background-color: #f6f8fa;
		}
	}
`;



function Navigation() {

	const links = [
		{
			id: 1,
			text : 'For You',
			to : '/home'
		},
		{
			id: 2,
			text: "My Highlights",
			to : '/myhighlights/highlights'
		},
		{
			id: 3,
			text : 'More',
			to : "/more"
		}
	]

	const [activeId, setActiveId] = useState(null);

	const onClick = (event) => {
		const {target:{id}} = event;
		setActiveId(id);
	}
// history props받고 이탈이되면 해제하는 식으로 수정
// 같이 검사
  return (
    <MenuContainer>
			{links.map(link => (
				<Link 
					onClick = {onClick}
					key= {link.id}
					id = {link.id}
					className={ parseInt(activeId) === link.id ? 'active' : 'inactive'}
					to = {link.to}
				>{link.text}</Link>
				))}
    </MenuContainer>
  );
}

export default Navigation;