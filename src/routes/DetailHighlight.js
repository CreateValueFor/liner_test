import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import { PageArticle, PageList, pages } from './ForYou';
import { MyPageButtonContainer } from './MyHighlights';

const DetailView = styled.div`

`;
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
    		line-height: 1.2;
    		font-size: 24px;
    		letter-spacing: normal;
    		color: #222;
    		font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		margin: 0 0 16px;
    		cursor: default;
    		white-space: pre-line;
    		position: relative;
				word-wrap:break-word;
			}
			.page-tags{
      display: flex;
      flex-direction: row;
      .tag-icon{
        background-image: url('https://getliner.com/src/images/tag-icon.svg');
        width: 20px;
        height: 20px;
        margin: 2px 8px 18px 0;
        display: inline-block;
      }
      .page-taglist-container{
        max-width: 652px;
        margin-bottom: 4px;
        display: flex;
        flex-wrap: wrap;
        .add-tags{
          font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.5;
          font-size: 12px;
          letter-spacing: -.3px;
          color: #b0b4bd;
          border-radius: 4px;
          margin: 0 0 6px;
          height: 24px;
          padding: 0 6px;
          &:hover{
          background-color:#f6f8fa;
        }
        }
      }
    }
			.page-source-container{
				margin-bottom:16px;
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
    			font-size: 12px;
    			line-height: 1.5;
					.source-link{
						color: #777;
					}
				}
				.vertical-line{
					border-left: 1px solid #777;
    			height: 10px;
    			margin: 0 6px;
				}
				.date{
					font-size: 12px!important;
					font-weight: 400;
					font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			color: #777;
    			line-height: 1.5;
				}
			}
		}
		.page-detail{
			padding: 32px 0;
			.top-indicator{
				height: 4px;
   			margin-top: -10px;
    		margin-bottom: 6px;
			}
			.highlight{
				display:flex;
				.highlight-index{
					border-width: 0 0 0 4px;
    			border-left: 4px solid rgb(255,255,131);
    			margin: 2px 0;
				}
				.highlight-contents{
					font-weight: 400;
    			font-stretch: normal;
    			font-style: normal;
    			line-height: 1.5;
    			font-size: 16px;
    			letter-spacing: normal;
    			color: #333;
    			font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			width: 100%;
    		margin: 0 0 0 16px;
    			word-wrap: break-word;
    			background-color: transparent;
    			display: flex;
    			align-items: center;
    			min-height: 32px;
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
			.indicator{
				height: 4px;
    		margin-top: 6px;
    		background-color: transparent;
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

function DetailHighlight({history}) {
	
	const [modal, setModal] = useState(false)
	const [modalClass, setModalClass] = useState('original');
	console.log(history)
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
					<MyPageButtonContainer closeModal={closeModal}/>
					{modal && <Modal closeModal={closeModal} modalClass={modalClass} page={page}/>}
				</div>
			</DetailHeader>
			<DetailContainer>
				{page.src && <img src={page.src} alt="" className="page-img" />}
				<div className="page-contents">
					<div className="page-abstract">
						<h2 className="title">{page.title}</h2>
						<div class="page-tags" >
        			<div class="tag-icon" ></div>
        				<div class="page-taglist-container" >
          			<button class="add-tags" >Edit Tag</button>
        			</div>
      			</div>
					<div className="page-source-container">
					<img src={page.favicon} alt="favicon" className="favicon"/>
					<div className="source">
						<a href={page.href} target="_blank" className="source-link">{page.href.split('/')[2]}</a>
					</div>
					<div className="vertical-line"></div>
					<div className="date">Jun 11, 2021</div>
				</div>
					</div>
					<div className="page-detail">
						<div className="top-indicator"></div>
						<div className="highlight">
							<div className="highlight-index"></div>
							<mark className="highlight-contents">
								{page.hightlight}
							</mark>
						</div>
						<div className="indicator"></div>
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
			{/* <RelevantPages>
				<div className="relevant-pages-title">
					More Like This
				</div>
				<PageList>
				{pages.map((page,index)=> (
					<PageArticle key = {index}page={page}/>
				))}
				</PageList>
			</RelevantPages> */}
		</div>
	);
}

export default DetailHighlight;