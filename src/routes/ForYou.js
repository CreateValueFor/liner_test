import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import animationData from '../lotties/home_signal.json';


const ForyouContainer = styled.div`
	position:relative;
	h3{
		font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.35px;
    color: #787d86;
		margin: 0 16px 24px;
	}
`;

const StickyHeader = styled.div`
	margin: 40px 16px 16px 15px;
	display: flex;
  align-items: center;
  background-color: #fff;
  position: sticky;
  top: 64px;
  z-index: 2;
  height: 40px;
	h1{
		display: flex;
    align-items: center;
    width: 681px;
    height: 40px;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    font-size: 32px;
    letter-spacing: -.8px;
    color: #272b31;
    z-index: 2;
		.dropdown-container{
			position: relative;
    	height: 32px;
			.info-button{
				margin-left: 9px;
				width: 32px;
    		height: 32px;
    		background-size: 20px;
    		background-repeat: no-repeat;
    		background-position: 50%;
    		background-image: url('https://getliner.com/src/images/info.svg');
    		border-radius: 50%;
    		z-index: 7;
    		position: absolute;
				&:hover{
					background-color:#f6f8fa;
				}
			}
			.guide-tooltip-container{
				top: -24px;
    		margin-left: 60px;
				z-index: 50;
    		width: 329px;
    		height: 280px;
    		position: absolute;
    		display: flex;
				.tooltip-triangle{
					width: 19px;
    			height: 19px;
    			background-color: #52565d;
    			position: absolute;
    			top: 30px;
    			left: -9px;
    			transform: rotate(45deg);
    			z-index: 2;
    			border-bottom-left-radius: 4px;
    			border-bottom: 1px solid #969aa2;
    			border-left: 1px solid #969aa2;
				}
				.tooltip-rectangle{
					justify-self: flex-end;
    			width: 320px;
    			height: 280px;
    			box-shadow: 0 8px 20px 0 rgb(39 43 49 / 20%);
    			border: 1px solid #969aa2;
    			background-color: #52565d;
    			border-radius: 8px;
    			z-index: 1;
    			position: relative;
				}
				.close-btn{
					background-image: url('https://getliner.com/src/images/close-be-comment.svg');
    			background-repeat: no-repeat;
    			background-size: 24px 24px;
    			width: 24px;
    			height: 24px;
    			position: absolute;
    			right: 8px;
    			top: 8px;
    			z-index: 3;
				}
				.lottie-container{
					width: 100%;
    			height: 160px;
    			border-top-left-radius: 7px;
    			border-top-right-radius: 7px;
				}
				.text-container{
					margin-top: -10px;
    			height: 40%;
    			display: flex;
    			flex-direction: column;
    			justify-content: center;
    			padding: 15px 17px;
					text-align: left;
					.text-title{
						font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-weight: 700;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				font-size: 16px;
    				letter-spacing: -.4px;
    				color: #fff;
					}
					.text-contents{
						margin-top: 8px;
    				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: 20px;
    				font-size: 14px;
    				letter-spacing: -.35px;
    				color: #fff;
					}
				}}
		}
		.language{
			justify-self: flex-end;
    	margin-left: auto;
    	display: flex;
    	align-items: center;
    	align-self: flex-end;
			position: relative;
    	height: 32px;
			.language-btn{
				display: flex;
    		align-items: center;
    		align-self: flex-end;
    		font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		font-size: 14px;
    		font-weight: 400;
    		font-stretch: normal;
    		font-style: normal;
    		line-height: normal;
    		letter-spacing: -.35px;
    		color: #787d86 !important;
				.expand{
					background-image: url('https://getliner.com/src/images/expand-grey.svg');
    			width: 16px;
    			height: 16px;
    			object-fit: contain;
    			margin-left: 4px;
				}
				.collapse{
					background-image: url('https://getliner.com/src/images/collapse.svg');
    			width: 16px;
    			height: 16px;
    			object-fit: contain;
    			margin-left: 4px;
				}
			}
			.language-dropdown{
				position: relative;
    		left: -200px;
    		top: -15px;
    		z-index: 3!important;
				.dropdown{
					position: absolute;
    			top: 34px;
    			min-width: 200px;
    			width: max-content;
    			white-space: nowrap;
    			z-index: 2;
    			border-radius: 8px;
    			box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
    			border: 1px solid #eef1f4;
    			background-color: #fff;
    			padding: 8px 0;
    			margin: 0;
					.dropdown-header{
						height: 36px;
    				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 14px;
    				font-weight: 700;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.35px;
    				color: #969aa2;
    				display: flex;
    				padding: 8px 15px 0;
					}
					.selected{
						font-weight: 500 !important;
						color: #00bdb8 !important;
						display: flex !important;
					}
					.check{
						background-image: url('https://getliner.com/src/images/check-primary.svg');
    				background-repeat: no-repeat;
    				background-size: 14px 10px;
    				width: 14px;
    				height: 10px;
    				justify-self: flex-end;
    				margin-left: auto;
					}
					.language-li{
						list-style-type: none;
    				height: 40px;
    				background-color: #fff;
    				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 14px;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.35px;
    				color: #52565d;
    				padding: 8px 15px;
    				display: flex;
    				align-items: center;
    				cursor: pointer;
						&:hover{
							background-color: #f6f8fa;
						}
					}
				}
			}
		}
	}
`;

const lottieSetting = {
	loop: true,
	autoplay: true,
	animationData : animationData,
	rendererSettings: {
		preserveAspectRatio : 'xMidYMid slice'
	}
};

export const PageList = styled.div`
	.page-container{
		padding: 24px 16px 0;
    width: 712px;
    position: relative;
		.page-contents-container{
			display: flex;
    	justify-content: space-between;
    	padding-bottom: 16px;
    	overflow-x: hidden;
			.page-contents.no-img{
				width: 100%;
			}
			.page-contents{
				width: 560px;
				.title-container{
					overflow:hidden;
					.title{
						font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 20px;
    				font-weight: 700;
    				line-height: 1.33;
    				color: #222;
    				margin: 0 0 8px;
						word-wrap: break-word;
						word-break: break-word;
						overflow:hidden;
						a{
							font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    					font-size: 20px;
    					font-weight: 700;
    					line-height: 1.33;
    					color: #222;
    					margin: 0 0 8px;
							&:hover{
								opacity: .8;
							}
						}
					}
				}
				.highlight{
					margin-top: 16px;
					display:flex;
					.highlight-contents{
						font-size: 14px;
    				-webkit-line-clamp: 3;
    				-webkit-box-orient: vertical;
    				overflow: hidden;
    				text-overflow: ellipsis;
						width: 100%;
    				font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: 1.43;
    				letter-spacing: normal;
    				color: #555;
    				word-wrap: break-word;
    				background-color: transparent;
					}
				}
			}
			.image-link{
				img{
					object-fit: cover;
    			background-position: 50%;
    			background-size: cover;
    			background-repeat: no-repeat;
					width: 96px;
    			height: 96px;
    			border-radius: 4px;
    			flex-shrink: 0;
    			margin-left: 24px;
					&:hover{
						opacity:.8;
					}
				}
			}
		}
		.page-footer{
			height: 48px;
    	display: flex;
    	justify-content: space-between;
    	width: 680px;
    	padding-bottom: 16px;
			.page-source-container{
				display: inline-flex;
    		align-items: center;
    		position: relative;
    		cursor: default;
				.favicon{
					background-repeat: no-repeat;
    			background-size: 20px 20px;
    			width: 20px;
    			height: 20px;
    			border-radius: 4px;
					
				}
				.source{
					font-weight: 400;
    			margin-left: 14px;
    			text-decoration: underline;
					font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			color: #777;
    			font-size: 11px;
    			line-height: 1.5;
					.source-link{
						color: #777;
					}
				}
			}
			/* .page-button-container{
				position:relative;
				display: inline-flex;
				.tags-dropdown-container{
					margin-top: 4px;
    			margin-right: 4px;
					display: inline;
    			position: relative;
					.tags{
						font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-weight: 500;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: 1.5;
    				font-size: 12px;
    				letter-spacing: -.3px;
    				color: #b0b4bd;
    				height: 24px;
						width:74px;
    				border-radius: 4px;
    				padding: 0 6px;
    				margin: 3px 4px 3px 0;
    				text-align: right;
						display: inline-flex;
    				align-items: center;
					}
				}
				button{
					width: 32px;
    			height: 32px;
    			background-size: 24px;
    			background-repeat: no-repeat;
    			background-position: 50%;
    			border-radius: 50%;
					&:hover{
						background-color: #f6f8fa;
					}
				}
				.save{
					position:relative;
					background-image: url('https://getliner.com/src/images/save.svg')
				}
				.saved{
					position:relative;
					background-image: url('https://getliner.com/src/images/save-fill.svg')
				}
				.dropdown-container{
					display:inline;
					position:relative;
					height:32px;
				}
				.share{
					background-image: url('https://getliner.com/src/images/share-header.svg')
				}
				.more{
					background-image: url('https://getliner.com/src/images/more-light.svg')
				}
				ul.dropdown{
					position: absolute;
    			top: 34px;
    			min-width: 224px;
    			width: max-content;
    			white-space: nowrap;
    			z-index: 2;
    			border-radius: 8px;
    			box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
    			border: 1px solid #eef1f4;
    			background-color: #fff;
    			padding: 8px 0;
    			margin: 0;
					li{
						list-style-type: none;
    				height: 40px;
    				background-color: #fff;
    				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 14px;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.35px;
    				color: #52565d;
    				padding: 8px 15px;
    				display: flex;
    				align-items: center;
    				cursor: pointer;
						&:hover{
							background-color: #f6f8fa;
						}
						.dropdown-icon{
							background-repeat: no-repeat;
    					background-size: 24px 24px;
    					width: 24px;
    					height: 24px;
    					margin-right: 8px;
						}
					}
					li:first-child .dropdown-icon{
						background-image: url('https://getliner.com/src/images/like-dropdown.svg');
					}
					li:nth-child(2) .dropdown-icon{
						background-image: url('https://getliner.com/src/images/dislike-dropdown.svg');
					}
					li:last-child .dropdown-icon{
						background-image: url('https://getliner.com/src/images/hide-dropdown.svg');
					}
				}
			} */
		}
		.page-list-separator{
			height: 8px;
    	border-bottom: 1px solid #eef1f4;
		}
	}
`;

export const StyledPageButtonContainer = styled.div`
	.page-button-container{
				position:relative;
				display: inline-flex;
				.tags-dropdown-container{
					margin-top: 4px;
    			margin-right: 4px;
					display: inline;
    			position: relative;
					.tags{
						font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-weight: 500;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: 1.5;
    				font-size: 12px;
    				letter-spacing: -.3px;
    				color: #b0b4bd;
    				height: 24px;
						width:74px;
    				border-radius: 4px;
    				padding: 0 6px;
    				margin: 3px 4px 3px 0;
    				text-align: right;
						display: inline-flex;
    				align-items: center;
					}
				}
				button{
					width: 32px;
    			height: 32px;
    			background-size: 24px;
    			background-repeat: no-repeat;
    			background-position: 50%;
    			border-radius: 50%;
					&:hover{
						background-color: #f6f8fa;
					}
				}
				.save{
					position:relative;
					background-image: url('https://getliner.com/src/images/save.svg')
				}
				.saved{
					position:relative;
					background-image: url('https://getliner.com/src/images/save-fill.svg')
				}
				.dropdown-container{
					display:inline;
					position:relative;
					height:32px;
				}
				.share{
					background-image: url('https://getliner.com/src/images/share-header.svg')
				}
				.more{
					background-image: url('https://getliner.com/src/images/more-light.svg')
				}
				ul.dropdown{
					position: absolute;
    			top: 34px;
    			min-width: 224px;
    			width: max-content;
    			white-space: nowrap;
    			z-index: 2;
    			border-radius: 8px;
    			box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
    			border: 1px solid #eef1f4;
    			background-color: #fff;
    			padding: 8px 0;
    			margin: 0;
					li{
						list-style-type: none;
    				height: 40px;
    				background-color: #fff;
    				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 14px;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.35px;
    				color: #52565d;
    				padding: 8px 15px;
    				display: flex;
    				align-items: center;
    				cursor: pointer;
						&:hover{
							background-color: #f6f8fa;
						}
						.dropdown-icon{
							background-repeat: no-repeat;
    					background-size: 24px 24px;
    					width: 24px;
    					height: 24px;
    					margin-right: 8px;
						}
					}
					li:first-child .dropdown-icon{
						background-image: url('https://getliner.com/src/images/like-dropdown.svg');
					}
					li:nth-child(2) .dropdown-icon{
						background-image: url('https://getliner.com/src/images/dislike-dropdown.svg');
					}
					li:last-child .dropdown-icon{
						background-image: url('https://getliner.com/src/images/hide-dropdown.svg');
					}
				}
			}
`;

export const pages = [
	{
		id: 'detail1',
		href: 'https://react.vlpt.us/basic/20-useReducer.html',
		title: '20. useReducer 를 사용하여 상태 업데이트 로직 분리하기',
		src : 'https://ko.javascript.info/img/site_preview_en_1200x630.png',
		favicon: 'https://getliner.com/src/images/favicon.svg',
		hightlight : '여기서 state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수라고 이해하시면 됩니다'
	},
	{
		id: 'detail2',
		href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in',
		title: 'for...in',
		favicon: 'https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png',
		src : 'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png',
		hightlight : 'for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. (Symbol로 키가 지정된 속성은 무시합니다.)'
	},
	{
		id: 'detail3',
		href: 'https://ko.javascript.info/async-await',
		title: 'async와 await',
		src : 'https://ko.javascript.info/img/site_preview_en_1200x630.png',
		favicon: 'https://getliner.com/src/images/favicon.svg',
		hightlight : '자바스크립트는 await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다립니다. 결과는 그 이후 반환됩니다'
	},
	{
		id: 'detail4',
		href: 'https://gist.github.com/ninanung/767ca722befa8b0affe51ffa0064296b',
		title: '때늦은 React Hooks 시리즈 4탄 - useCallback/useRef',
		favicon: 'https://getliner.com/src/images/favicon.svg',
		src :'',
		hightlight : 'insert'
	},
	{
		id: 'detail5',
		href: 'https://medium.com/hivelab-dev/react-js-tutorial-part1-c632e34fc32',
		title:'[실전 React.js] Part1. 개념 이해하기',
		favicon:"https://miro.medium.com/fit/c/120/120/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
		src:"https://miro.medium.com/max/1200/0*XCgoYU9sqt95P8J0.png",
		hightlight : '버튼 클릭으로 숫자가 증가하는 Counter 예제를 보겠습니다'
	}
];
//For you의 article에 있는 save, share, more 버튼을 담고 있는 컨테이너 입니다. 
export function PageButtonContainer({closeModal}){
	const [moreDropDownMenu, setmoreDropDownMenu] = useState(false)
	const [isSave, setIsSave] = useState(false)
	//more 버튼을 열고 닫기 위한 함수입니다.
	const onClick = () => {
		setmoreDropDownMenu(prev => !prev)
	}
	//save 버튼 UI 변화를 위한 함수입니다.
	const savePage = () => {
		setIsSave(prev => !prev);
	}

	return(
		<StyledPageButtonContainer>
			<div className="page-button-container">
			{isSave && <div className="tags-dropdown-container add-tags-dropdown">
				<button className="tags">+&nbsp;Add&nbsp;tags</button>
			</div>}
			<button
				onClick={savePage}
				className={isSave ? "circular-button saved" : "circular-button save"}
				aria-label={isSave ? "Save" : "Saved"}
			/>
			<div className="dropdown-container">
				<button onClick={closeModal} className="share circular-button"></button>
			</div>
			<div className="dropdown-container">
				<button onClick= {onClick}className="circular-button more"></button>
				{moreDropDownMenu && <ul className="dropdown">
					<li onClick={closeModal}><span className="dropdown-icon"></span>
						More pages like this
					</li>
					<li onClick={closeModal}><span className="dropdown-icon"></span>
						Fewer pages like this
					</li>
					<li onClick={closeModal}><span className="dropdown-icon"></span>
						Hide this page
					</li>
				</ul>}
			</div>
				</div>
		</StyledPageButtonContainer>
	)
}

export function PageArticle({page}) {
	//모달을 열고 닫는 함수입니다. 클래스리스트의 값에 따라 다른 모달이 호출될 수 있도록 모달의 클래스도 같이 상태관리하여 보내줍니다.
	const [modal, setModal] = useState(false)
	const [modalClass, setModalClass] = useState('original');
	
	const closeModal = (event) => {
		setModal(prev => !prev);
		
		const {target:{classList}} = event;
		setModalClass(classList[0])
	}
	
	return(
		<article className="page-container">
			<div className="page-contents-container">
				<div className={page.src === ''? "page-contents no-img":"page-contents"}>
					<div className="title-container">
						<h2 className="title">
							<Link 
								to={{
								pathname: `/home/pages/:${page.id}`,
								state:{page}}}>
									{page.title}
							</Link>
						</h2>
					</div>
					<div className="highlight">
						<mark className="highlight-contents">
							{page.hightlight}
						</mark>
					</div>
				</div>
				{page.src !== '' && <Link to={{
								pathname: `/home/pages/:${page.id}`,
								state:{page}}} className ="image-link">
					<img alt="document" src={page.src}/>
				</Link>}
			</div>
			<div className="page-footer">
				<div className="page-source-container">
					<img src={page.favicon} alt="favicon" className="favicon"/>
					<div className="source">
						<a href={page.href} target="_blank" rel="noreferrer"className="source-link">{page.href.split('/')[2]}</a>
					</div>
				</div>
				<PageButtonContainer closeModal={closeModal} />
			</div>
			<div className="page-list-separator"></div>
			{modal && <Modal closeModal={closeModal} modalClass={modalClass} page={page}/>}
		</article>
	);
}

function ForYou({history}) {

	const [lottie, setLottie] = useState(false);
	const [pause, setPause] = useState(false);
	const [languageDropDown, setlanguageDropDown] = useState(false);
	const [languages, setLanguages] = useState([
		{
			lang: 'English',
			id: 1,
			done: false
		},
		{
			lang: '한국어',
			id: 2,
			done: false
		},
		{
			lang: '简体字',
			id: 3,
			done: false
		},
		{
			lang: '繁體字',
			id: 4,
			done: false
		},
		{
			lang: '日本語',
			id: 5,
			done: false
		},
		{
			lang: 'Others',
			id: 6,
			done: false
		},
	])
	//처음 url클릭 시 랜딩 path를 home으로 설정하기 위해 useEffect를 이용하였습니다.
	useEffect(()=>{
		if (history && history.location.pathname === '/') history.push('/home')
	},[])
	//lottie 실행 함수들
	const onClick = () => {
		setLottie(prev=> !prev)
	}
	const onPause = () =>{
		setPause(prev => !prev)
	}
	//language드롭다운 클릭 시 색이 변하도록 map함수를 이용하여 접근한 객체가 클릭된 타겟과 아이디가 같다면 객체를 수정하였습니다.
	const onToggle = (event) => {
		const {target:{id}} = event;
		setLanguages(languages.map(lang => 
				lang.id === parseInt(id) ? {...lang, done : !lang.done} : lang
		))
	}
	//language 드롭다운 open 함수
	const openDropDown = () => {
		setlanguageDropDown(prev => !prev)
	}


	return (
		<ForyouContainer>
			<StickyHeader>
				<h1>
					For You
					<div className="dropdown-container">
						<button className="info-button home" onClick={onClick}></button>
						{lottie && (
						<div className="guide-tooltip-container" id="for_you">
							<div className="tooltip-triangle" id="for_you"></div>
							<div className="tooltip-rectangle">
								<button className="close-btn" onClick={onClick}></button>
								<div className="lottie-container">
									<Lottie 
										options={lottieSetting}
										isPaused={pause}
										onClick={onPause}
										height={160}
										width={320}
									/>
								</div>
								<div className="text-container" id="for_you">
									<div className="text-title">For You</div>
									<div className="text-contents">
										We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.
									</div>
								</div>
							</div>
						</div>
						)}
					</div>
					<div className="language false dropdwon-container">
						<button className="language-btn false" onClick = {openDropDown}>
							Languages
							<div className={languageDropDown ? 'collapse': 'expand'}></div>
						</button>
						{languageDropDown && <div>
							<div className="language-dropdown">
								<ul className="dropdown">
									<div className="dropdown-header">Select for feed</div>
									{languages.map(lang => (
										<li onClick={onToggle}className={lang.done ? "language-li selected" : "language-li notselected"} key={lang.id} id={lang.id}>
											<span >{lang.lang}</span>
											{lang.done && <div className="check"></div>}
										</li>
									))}
								</ul>
							</div>
						</div>}
					</div>
				</h1>
			</StickyHeader>
			<h3>Picked by LINER, just for you</h3>
			<PageList>
				{pages.map((page,index)=> (
					<PageArticle key = {index}page={page}/>
				))}
			</PageList>
		</ForyouContainer>
	);
}

export default ForYou;