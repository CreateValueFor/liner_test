import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
	z-index: 99;
  top: 0;
  overflow-y: hidden;
  cursor: default;
	width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0,0,0,.1);
  left: 0;
	//모달 종류
	.modal-content.share{
		width: 480px !important;
	}
	.modal-content.pdf{
		width: 480px!important;
    padding: 20px 10px 8px 16px!important;
	}
	.modal-content.filterBtn{
		padding: 20px 16px 16px !important;
	}
	.modal-content{
		width: 400px;
    min-height: 179px;
    border-radius: 16px;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 20px 16px;
    display: flex;
    flex-direction: column;
	}
	.modal-header.export{
		margin-bottom: 16px;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.modal-header.share{
		margin-bottom: 0;
	}
	.modal-header.pdf{
		margin: 0;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 12px;
    color: #272b31;
    height: 32px;
		display:flex;
		justify-content:space-between;
		align-items:center;
	}
	.modal-header.filterBtn{
		margin-bottom: 0;
		display: flex;
    align-items: center;
    flex-shrink: 0;
	}
	.modal-header{
		margin-bottom: 24px;
		padding: 0 12px 0 16px;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    font-size: 24px;
    letter-spacing: -.6px;
    color: #272b31;
		.modal-title{

		}
		.close-button{
			width: 32px;
    	height: 32px;
    	background-size: 24px;
    	background-repeat: no-repeat;
    	background-position: 50%;
    	border-radius: 50%;
    	background-image: url('https://getliner.com/src/images/close-light.svg');
    	margin-left: auto;
    	margin-right: -4px;
    	margin-bottom: -3px;
    	float: right;
			&:hover{
				background-color: #f6f8fa;
			}
		}
}
	
	.modal-detail{
		font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: -.35px;
    color: #787d86;
		.text{
			padding: 0 16px;
		}
	}
	.modal-footer{
		.action-button-container{
			display: flex;
    	justify-content: flex-end;
    	margin-right: 4px;
			margin-top: 32px;
			.action-button{
				padding: 8px 12px;
    		margin-bottom: -4px;
				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		font-size: 16px;
		    font-weight: 500;
		    font-stretch: normal;
		    font-style: normal;
    		line-height: 1.5;
    		letter-spacing: -.4px;
			}
			.default{
				border-radius: 8px;
    		color: #787d86;
    		font-weight: 400;
				&:hover{
					background-color: #f6f8fa;
				}
			}
			.positive{
				border-radius: 8px;
    		font-weight: 700;
    		color: #00bdb8;
				&:hover{
					background-color: #e5f8f7;
				}
			}
		}
	

		}`;

const StyledShareModalFooter = styled.div`
	padding-left: 16px;
  margin-top: 7px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: -4px;
	.link-input{
		border: none;
    font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #555;
    width: 335px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
		
	}
	.button-container{
		text-align: right;
    height: 36px;
    display: flex;
    align-items: center;
		#copy-to-clipboard, #copied{

			opacity: 1;
    	display: initial;

			transition: opacity .25s ease;
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 14px;
    	font-weight: 700;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	letter-spacing: -.25px;
    	color: #00bdb8;
    	border-radius: 8px;
    	padding: 8px 12px;
    	position: absolute;
    	right: 0;
    	margin-right: 4px;
			&:hover{
				background-color: #e5f8f7;
			}
		}
	}
`;
const StyledShareModalDetail = styled.div`
	border-bottom: 1px solid #eee;
	padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
	.circular-button{
		background-repeat: no-repeat;
    background-size: 36px 36px;
    width: 36px;
    height: 36px;
    margin-left: 16px;
		&:hover{
			background-color: #f6f8fa;
    	border-radius: 50%;
			.sns-button-hover{
				display: block;
    		height: 36px;
    		z-index: 10;
    		width: 36px;
    		border-radius: 50%;
    		background-color: rgba(39,43,49,.1);
			}

		}
	}
	.facebook{
		background-image: url('https://getliner.com/src/images/facebook.svg');
	}
	.twitter{
		background-image: url('https://getliner.com/src/images/twitter.svg');
	}
	.linkedin{
		background-image: url('https://getliner.com/src/images/linkdin.svg');
	}
	.messenger{
		background-image: url('https://getliner.com/src/images/messenger.svg');
	}
	.line{
		background-image: url('https://getliner.com/src/images/line.svg');
	}
	.mail{
		background-image: url('https://getliner.com/src/images/mail.svg');
	}
	.more{
		background-image: url('https://getliner.com/src/images/sns-more.svg');
	}
`;


function ShareModal({page}){
	const [copy, setCopy] = useState(false)
	const onClick = () => {
		setCopy(true)
		setTimeout(1000,setCopy(false));
	}

	return[
		(<span className="modal-title">Share Original Page</span>),
		(<StyledShareModalDetail>
			<a href="https://www.facebook.com/dialog/share?app_id=808110669244168&amp;display=popup&amp;href=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in&amp;redirect_uri=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" target="_blank" rel="noopener noreferrer" className="circular-button facebook"><span className="sns-button-hover"></span></a>
			<a href="https://twitter.com/share?text=JavaScript%20%7C%20MDN%20for...in%20for...in%EB%AC%B8%EC%9D%80%20%EC%83%81%EC%86%8D%EB%90%9C%20%EC%97%B4%EA%B1%B0%20%EA%B0%80%EB%8A%A5%ED%95%9C%20%EC%86%8D%EC%84%B1%20...&amp;url=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" target="_blank" rel="noopener noreferrer" className="circular-button twitter"><span className="sns-button-hover"></span></a>
			<a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" target="_blank" rel="noopener noreferrer" className="circular-button linkedin"><span className="sns-button-hover"></span></a>
			<a href="https://www.facebook.com/dialog/send?app_id=808110669244168&amp;link=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in&amp;redirect_uri=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" target="_blank" rel="noopener noreferrer" className="circular-button messenger"><span className="sns-button-hover"></span></a>
			<a href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" target="_blank" rel="noopener noreferrer" className="circular-button line"><span className="sns-button-hover"></span></a>
			<a href="mailto:?body=JavaScript%20%7C%20MDN%20for...in%20for...in%EB%AC%B8%EC%9D%80%20%EC%83%81%EC%86%8D%EB%90%9C%20%EC%97%B4%EA%B1%B0%20%EA%B0%80%EB%8A%A5%ED%95%9C%20%EC%86%8D%EC%84%B1%20...https%3A%2F%2Fdeveloper.mozilla.org%2Fko%2Fdocs%2FWeb%2FJavaScript%2FReference%2FStatements%2Ffor...in" className="circular-button mail" target="_blank" rel="noopener noreferrer"><span className="sns-button-hover"></span></a>
			<button className="circular-button more"><span className="sns-button-hover"></span></button>
		</StyledShareModalDetail>),
		(<StyledShareModalFooter>
		<input 
			type="text" 
			className="link-input" 
			id="share-link" 
			name="share-link"
			readOnly
			value={page.href}
		/>
		<div className="button-container">
			<button 
			  onClick={onClick}
				style={!copy? {opacity:'1', display:'initial'} : {width: '0px',
    opacity: '0'}}id="copy-to-clipboard">Copy</button>
			<button id="copied" style={!copy?{width: '0px',
    opacity: '0'}:{opacity:'1', display:'initial',width:"auto"}} class="fade-in">Copied</button>
		</div>
	</StyledShareModalFooter>)
	]
}

const StyledPdfModalFile = styled.section`
	padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
	.subtitle{
		font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-stretch: normal;
    font-style: normal;
		width: 416px;
    margin-bottom: 24px;
    font-weight: 400;
    line-height: 1.43;
    font-size: 14px;
    letter-spacing: -.35px;
    color: #787d86;
		text-align:start;
	}
	.file-upload-form{
		width: 416px;
    height: 160px;
    border-radius: 4px;
    background-color: #f6f8fa;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
		.file-upload-inst{
			display: flex;
    	align-items: center;
    	justify-content: center;
			.file-upload-img{
				background-repeat: no-repeat;
    		background-size: 50px 63px;
    		width: 50px;
    		height: 63px;
    		background-image: url('https://getliner.com/src/images/file-before.svg');
			}
			.file-upload-detail{
				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		font-size: 16px;
    		font-weight: 400;
    		font-stretch: normal;
    		font-style: normal;
    		line-height: normal;
    		letter-spacing: -.4px;
    		color: #888;
    		margin-left: 20px;
				span{
					cursor: pointer;
   		 		font-weight: 500;
    			color: #00bdb8;
    			text-decoration: underline;
				}
			}
		}
		.file-upload-input{

		}
	}
	.file-upload-button{
		display: block;
    width: 120px;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.35px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
		border-radius: 8px;
    background-color: #00bdb8;
    color: #fff;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
	}
	.instruction{
		padding: 0 16px;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 11px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 17px;
    letter-spacing: -.28px;
    color: #969aa2;
    margin-top: 16px;
    text-align: center;
		a{
			font-weight: 500;
    	color: #969aa2;
    	text-decoration: underline;
		}
	}

`;


function PdfModal(){
	return[
		(<h1 style={{display:"inline",fontSize:"24px"}}className="modal-title">Upload PDF</h1>),
		(<StyledPdfModalFile>
			<div className="subtitle">Upload a PDF and start highlighting with LINER.</div>
			<form action="" className="file-upload-form">
				<div className="file-upload-inst">
					<div className="file-upload-img"></div>
					<div className="file-upload-detail">
						Drag or&nbsp; 
						<span>Browse</span>
						&nbsp;Files
					</div>
				</div>
				<input type="text" className="file-upload-input" accept=".pdf" hidden/>
			</form>
			<button style={{opacity:".3",cursor:"inherit"}}className="file-upload-button liner-fill-btn">Upload</button>
			<div className="instruction">
			You can also add an article by highlighting the web page or PDF with LINER browser extensions and mobile apps.
			<a 
			  href="https://support.getliner.com/hc/en-us/articles/360020478251-Use-LINER-Everywhere"
				target="_blank"
				rel="noopener noreferrer"
				>Learn more</a>
			</div>
		</StyledPdfModalFile>),
		(<></>)
	]
}

const StyledExportModalButtonContainer = styled.div`
	margin-left: 8px;
  padding-bottom: 12px;
	padding-top: 24px;
  display: flex;
	.button-container{
		width: 53px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 16px;
		.word{
			background-image: url('https://getliner.com/src/images/word.svg');
		}
		.onenote{
			background-image: url('https://getliner.com/src/images/onenote.svg');
		}
		.evernote{
			background-image: url('https://getliner.com/src/images/evernote.svg');
		}
		.plain-text{
			background-image: url('https://getliner.com/src/images/text.svg');
		}
		.circular-button{
			background-repeat: no-repeat;
    	background-size: 36px 36px;
    	width: 36px;
    	height: 36px;
    	
			&:hover{
				background-color: #f6f8fa;
    		border-radius: 50%;
				.export-button-hover{
					display: block;
    			height: 36px;
    			z-index: 10;
    			width: 36px;
    			border-radius: 50%;
    			background-color: rgba(39,43,49,.1);
			}
			}
			
			}
		.button-title{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 12px;
    	font-weight: 500;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	letter-spacing: -.3px;
    	text-align: center;
    	color: #787d86;
    	display: block;
    	margin-top: 8px;
		}
	}
	
`;

function ExportModal(){
	return[
		(<span className="modal-title">Export</span>),
		(<>
			<div style={{textAlign:'start'}}className="text">Export your highlights</div>
			<StyledExportModalButtonContainer className="circular-button-container">
				<div className="button-container">
					<button className="circular-button word">
						<span class="export-button-hover"></span>
					</button>
					<span className="button-title">Word</span>
				</div>
				<div className="button-container">
				<button className="circular-button onenote">
						<span class="export-button-hover"></span>
					</button>
					<span className="button-title">Onenote</span>
				</div>
				<div className="button-container">
				<button className="circular-button evernote">
						<span class="export-button-hover"></span>
					</button>
					<span className="button-title">Evernote</span>
				</div>
				<div className="button-container">
				<button className="circular-button plain-text">
						<span class="export-button-hover"></span>
					</button>
					<span className="button-title">Text</span>
				</div>
			</StyledExportModalButtonContainer>
		</>
			),
		(<></>)
	]
}

const TagFilterHeader = styled.span`
	font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-size: 24px;
  letter-spacing: -.6px;
  color: #272b31;
  width: auto;
  height: 29px;
  text-align: center;
`;

const TagFilterDetail = styled.div`
	text-align:start;
	.filter-title{
		.title{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-weight: 700;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	font-size: 14px;
  	  letter-spacing: -.35px;
	    color: #969aa2;
    	margin-bottom: 16px;
    	margin-top: 24px;
    	margin-left: 16px;
		}
	}
	.tags-section{
		.input-outer-container{
			width: 336px;
    	position: relative;
    	margin: 0 auto;
    	border-radius: 8px;
			.input-inner-container{
				background-color: rgb(246, 248, 250);
				padding: 8px 4px;
    		border-radius: 8px;
    		height: 40px;
    		overflow-x: hidden;
				display: flex;
    		align-items: center;
    		flex-shrink: 0;
				.tag-icon{
					background-repeat: no-repeat;
    			background-size: 24px 24px;
    			width: 24px;
    			height: 24px;
    			background-image: url('https://getliner.com/src/images/tag-small.svg');
    			position: absolute;
				}
				.saved-tags-filter{
					margin-left: 36px;
    			display: flex;
    			flex-direction: row;
    			right: 0;
    			/* overflow-x: scroll; */
					.no-filter{
						min-width: 70px;
					}
					input{
						font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    				font-size: 14px;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: -.35px;
    				color: #555;
    				height: 24px;
    				width: 100vw;
					}
				}
			}
		}
		.separator{
			width: 368px;
    	height: 1px;
    	margin: 16px 0 7px;
    	border: 1px solid #eef1f4;
		}
		.modal-footer{
			padding: 0 4px;
    	display: flex;
    	align-items: center;
    	height: 40px;
			.reset{
				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		font-weight: 500;
    		font-stretch: normal;
    		font-style: normal;
    		line-height: 24px;
    		font-size: 14px;
    		letter-spacing: -.35px;
    		color: #787d86;
    		border-radius: 8px;
    		padding: 8px 12px;
				&:hover{
					background-color: #f6f8fa;
				}
			}
			.apply{
				font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    		font-weight: 700;
    		font-stretch: normal;
    		font-style: normal;
    		line-height: 24px;
    		font-size: 16px;
    		letter-spacing: -.4px;
    		color: #00bdb8;
    		margin-left: auto;
    		padding: 8px 12px;
    		border-radius: 8px;
    		display: flex;
				&:hover{
					background-color: #e5f8f7;
				}
			}
		}
	}
`;

const TagFilterDetailSelections = styled.div`
	.color-list{
		list-style: none;
    margin-top: 8px;
    padding: 0;
		.title{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-weight: 700;
    		font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	font-size: 14px;
    	letter-spacing: -.35px;
    	color: #969aa2;
    	margin-bottom: 16px;
    	margin-top: 24px;
    	margin-left: 16px;
		}
	}
`;

const ColorContainer = styled.li`
	display: flex;
  flex-direction: row;
  align-items: center;
  width: 368px;
  border-radius: 8px;
  cursor: pointer;
	&:hover{
		background-color: #f6f8fa;
	}
	.color{
		display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
		.name{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 14px;
    	font-weight: 400;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: 20px;
    	letter-spacing: -.35px;
    	color: #52565d;
    	margin-left: 16px;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	flex-shrink: 1;
		}
		.name.lock{
			color:rgba(82,86,93,.3);
		}
		.pallete{
			width: 24px;
    	height: 24px;
    	border-radius: 50%;
    	flex-shrink: 0;
		}
	}
	div.color{
		width: 100%;
    height: 32px;
    cursor: pointer;
		.pallete{
			width: 20px;
    	height: 20px;
    	margin-left: 16px;
    	display: flex;
			.color-lock{
				margin:auto;
			}
		}
		.name{
			overflow:visible;
		}
		.name.selected{
			color: #00bdb8;
		}
	}
	.button-icon-container{
		display: flex;
    align-items: center;
    width: 20px;
    height: 10px;
		.color.selected{
			margin-left: auto;
    	position: absolute;
    	right: 32px;
    	width: 14px;
    	height: 10px;
			cursor:pointer;
			background-image: url('https://getliner.com/src/images/check.svg');
    	background-repeat: no-repeat;
    	background-size: 14px 10px;
		}
	}
`;

function ColorList({color,onClick}){
	return(
		<>
			{!color.availabe && color.isColor && <div style={{height:"32px", position:"absolute",width:'368px'}} className="loock-overlay"></div>}
			<ColorContainer onClick={onClick} >
				<div className="color">
					{color.isColor ? 
					<span style={{backgroundColor:color.color}} className="pallete">
						{!color.availabe && <img src="https://getliner.com/src/images/lock-tooltip.svg" alt="lock" class="color-lock"/>}
					</span>:
					<span 
							style = {!color.selected ?{
								width:"20px",
								marginLeft:"16px",
								height:"20px",
								backgroundSize:"20px",
								backgroundImage:`url(${color.src})`
						}:{
							width:"20px",
							marginLeft:"16px",
							height:"20px",
							backgroundSize:"20px",
								backgroundImage:`url(${color.srcSelected})`
						}}
						className={color.class + " " + (color.selected && 'selected')}>

					</span>
					}

					<span className={"name "+ (color.selected && 'selected ') +(color.isColor&& !color.availabe && ' lock')}>{color.name}</span>
				</div>
				<div className="button-icon-container">
					{color.selected && <span className={"color " + (color.selected && 'selected')}></span>}
				</div>
			</ColorContainer>
			
		</>
	)
}

function TagFilterModal(){
	const [colors, setColors] = useState([
		{
			name: 'Yello',
			color:'#ffff83',
			selected: true,
			availabe: true,
			isColor: true
		},
		{
			name: 'Mint',
			color:'#a6ffe9',
			selected: false,
			availabe: true,
			isColor: true
		},
		{
			name: 'Orange',
			color:'#ffc7ba',
			selected: false,
			availabe: false,
			isColor: true
		},
		{
			name: 'Violet',
			color:'#d9c3ff',
			selected: false,
			availabe: false,
			isColor: true
		},
		{
			name: 'Blue',
			color:'#b8dcff',
			selected: false,
			availabe: false,
			isColor: true
		},
		{
			name: 'Pink',
			color:'#ffd0ef',
			selected: false,
			availabe: false,
			isColor: true
		},])
const [filters, setFilters] = useState([
		{
			class: 'web-filter',
			name:'Web',
			selected: true,
			src:"https://getliner.com/src/images/web-filter.svg",
			srcSelected: 'https://getliner.com/src/images/web-filter-selected.svg',
			isColor: false
		},
		{
			class: 'pdf-filter',
			name:'PDF',
			selected: false,
			src:"https://getliner.com/src/images/pdf-filter.svg",
			srcSelected: 'https://getliner.com/src/images/pdf-filter-selected.svg',
			isColor: false
		},
	])
	const onClick = (event) => {
		console.log(event);
	}
	return[
		(<TagFilterHeader >Filter</TagFilterHeader>),
		(<TagFilterDetail>
			<div className="filter-title">
				<div className="title">Tags</div>
			</div>
			<div className="tags-section">
				<div className="input-outer-container" id="bottom-scroll-wrap">
					<div className="input-inner-container filter">
						<div className="tag-icon"></div>
						<div className="saved-tags-filter">
							<input 
							  type="text" 
								className="no-filter" 
								id="tag-search"
								name="tag"
								autoComplete="off"
								placeholder="Search tags"
							/>
						</div>
					</div>
				</div>
				<TagFilterDetailSelections>
					<ul className="color-list">
						<div className="title">Color Filter</div>
						{colors.map((color,index) => <ColorList onClick={onClick} key={index} color={color}/>)}
					</ul>
					<ul className="color-list">
						<div className="title">Page type</div>
						{filters.map((filter,index)=> <ColorList key={index} color={filter} />)}
					</ul>
				</TagFilterDetailSelections>
				<div className="separator"></div>
				<div className="modal-footer">
					<button className="reset">Reset</button>
					<button className="apply">Apply</button>
				</div>
			</div>
		</TagFilterDetail>),
		(<></>)
	]
}

function switchModal(modalClass){
	switch(modalClass){
		case 'share':
			return ShareModal;
		case 'pdf':
			return PdfModal;
		case 'export':
			return ExportModal;
		case 'filterBtn':
			return TagFilterModal;
		default:
			return PdfModal;
	}
}

function Modal(props){
	const {closeModal, modalClass} = props
	console.log(modalClass);
	const currentModal = switchModal(modalClass)

	const output= (e) => {
		try{if(e.target.classList.length===3){
			closeModal();
		};}catch(error){
			console.log(error);
		}
		
	}

	useEffect(()=>{
		window.addEventListener("click",output);
		return () => {
			window.removeEventListener("click",output);
		}
	},[]);
	return(
		<StyledModal className="modal">
			<div className={"modal-content "+ modalClass}>
				<div className={'modal-header ' + modalClass}>
					{currentModal(props)[0]}
					{/* <span className="modal-title">Are You Sure?</span> */}
					<button onClick={closeModal} className="close-button"></button>
				</div>
				<div className="modal-detail">
					{currentModal(props)[1]}
					{/* <div className="text">
						Do you really want to hide this page?
						<br/>
						This action cannot be undone.
					</div> */}
				</div>
				<div className="modal-footer">
					{currentModal(props)[2]}
					{/* <div className="action-button-container">
						<button onClick={closeModal}className="action-button default">Cancel</button>
						<button onClick={closeModal} className="action-button positive">OK</button>
					</div> */}
				</div>
			</div>
		</StyledModal>
	);
}

export default Modal;