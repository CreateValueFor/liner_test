import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { PageArticle, PageButtonContainer, PageList, pages } from './ForYou';


const DetailHeader = styled.div`
	position: sticky;
	top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
	z-index: 11;
	width: 712px;
  height: 40px;
  background-color: #fff;
  padding: 0 16px;
	.shrink-container{
		display: flex;
    align-items: center;
		.back{
			background-image: url('https://getliner.com/src/images/back-header.svg');
    	width: 32px;
    	height: 32px;
    	background-size: 24px;
    	background-repeat: no-repeat;
    	background-position: 50%;
    	border-radius: 50%;
    	background-position: 2px!important;
    	display: inline-flex;
    	align-items: center;
    	position: relative;
			&:hover{
				background-color: #f6f8fa;
			}
		}
	}
`;

const DetailContainer = styled.div`
	margin-bottom: 120px;
  padding: 0 16px;
	.page-img{
		width: 680px;
    height: 240px;
    border-radius: 4px;
    object-fit: cover;
    object-position: 50% 50%;
	}
	.page-contents{
		margin-top: 11px;
		.page-abstract{
			width: 680px;
    	border-bottom: 1px solid #eef1f4;
			.title{
				font-weight: 700;
    		font-stretch: normal;
    		font-style: normal;
    		line-height: normal;
    		font-size: 24px;
    		letter-spacing: normal;
    		color: #222;
    		font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		word-wrap: break-word;
    		margin: 0 0 16px;
    		cursor: text;
    		white-space: pre-line;
			}
			.page-source-container{
				display: inline-flex;
    		align-items: center;
    		position: relative;
    		cursor: default;
			margin-bottom:16px;
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
    			font-size: 12px;
    			line-height: 1.5;
					.source-link{
						color: #777;
					}
				}
			}
		}
		.page-detail{
			padding: 32px 0;
			.highlight{
				display:flex;
				.highlight-index{
					border-width: 0 0 0 4px;
    			border-style: solid;
    			margin: 2px 0;
				}
				.highlight-index{
					border-left: 4px solid #7fdedb;
				}
				.highlight-contents{
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
					margin: 0 16px;
    			font-size: 16px;
				}
				.highlight-contents{
					display: block;
    			flex-direction: column;
    			align-items: flex-start;
					.highlight-percentage{
						font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 12px;
    				font-weight: 500;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.3px;
    				color: #969aa2;
    				margin-top: 4px;
					}
				}
			}
		}
		.grey-border-btn{
			border: 1px solid #dde1e7;
    	background-color: #fff;
    	color: #787d86;
    	font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
			&:hover{
				background-color: #f6f8fa;
			}
		}
		.view-original-button{
			display: flex;
    align-items: center;
    justify-content: center;
    width: 680px;
    height: 48px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.35px;
    text-align: center;
    margin-bottom: 40px;
		}
		.page-info{
			.info{
				display: flex;
    		margin-bottom: 24px;
				.info-index{
					width: 114px;
    			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			font-size: 14px;
    			font-weight: 700;
    			font-stretch: normal;
    			font-style: normal;
    			line-height: normal;
    			letter-spacing: -.35px;
    			color: #969aa2;
				}
				.info-contents{
					width: 566px;
    			font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			font-size: 16px;
    			font-weight: 400;
    			font-stretch: normal;
    			font-style: normal;
    			line-height: 1.5;
    			letter-spacing: normal;
    			color: #555;
				}
			}
		}
	}

`;

const RelevantPages = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
  user-select: auto;
	.relevant-pages-title{
		font-family: Montserrat, "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", sans-serif;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: -0.5px;
    color: rgb(51, 51, 51);
    padding-bottom: 16px;
    margin-left: 0px;
    border-bottom: 1px solid rgb(238, 241, 244);
    width: 680px;
	}
`;

function Detail({history}) {
	const [modal, setModal] = useState(false)
	const [modalClass, setModalClass] = useState('original');
	console.log(history.location.pathname)
	useEffect(()=>{
		console.log(history)
		if(history === undefined){
			history.push('/');
		}
	})
	const {location:{state:{page}}} = history
	
	const goBackClick = () => {
		history.goBack();
	}
	const closeModal = (event) => {
		setModal(prev => !prev);
		
		const {target:{classList}} = event;
		setModalClass(classList[0])
	}
	return (
		<div>
			<DetailHeader>
				<div className="shrink-container">
					<button onClick={goBackClick} className="back circular-button"></button>
				</div>
				<div className="page-button-container">
					<PageButtonContainer closeModal={closeModal}/>
					{modal && <Modal closeModal={closeModal} modalClass={modalClass} page={page}/>}
					{/* for you 에서 버튼 컨테이너 갖고오기 */}
				</div>
			</DetailHeader>
			<DetailContainer>
				{page.src && <img src={page.src} alt="" className="page-img" />}
				<div className="page-contents">
					<div className="page-abstract">
						<h2 className="title">{page.title}</h2>
						{/* <PageButtonContainer closeModal={closeModal}/> */}
						{/* page-source-container불러오기 */}
					<div className="page-source-container">
					<img src={page.favicon} alt="favicon" className="favicon"/>
					<div className="source">
						<a href={page.href} target="_blank" className="source-link">{page.href.split('/')[2]}</a>
					</div>
				</div>
					</div>
					<div className="page-detail">
						<div className="highlight">
							<div className="highlight-index"></div>
							<mark className="highlight-contents">
								{page.hightlight}
								<div className="highlight-percentage">Highlighted by LINER</div>
							</mark>
						</div>
					</div>
					<a 
					  href={page.href} 
						className="grey-border-btn view-original-button"
						target="_blank"
						rel="noopener noreferrer"
					>View Original</a>
					<div className="page-info">
						<div className="info">
							<div className="info-index">Description</div>
							<div className="info-contents">{page.hightlight}</div>
						</div>
					</div>
				</div>
			</DetailContainer>
			<RelevantPages>
				<div className="relevant-pages-title">
					More Like This
				</div>
				<PageList>
				{pages.map((page,index)=> (
					<PageArticle key = {index}page={page}/>
				))}
				</PageList>
			</RelevantPages>
		</div>
	);
}

export default Detail;