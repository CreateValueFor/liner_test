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
	.share{
		width: 480px !important;
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
	.modal-header.original{
		margin-bottom: 0;
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
		setTimeout(1000)
	}
	useEffect(()=>{
		if (copy === true){
			setTimeout(setCopy(false),1000)
		}
	},[copy])
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

function Modal(props){
	const {closeModal, modalClass} = props
	console.log(modalClass);
	return(
		<StyledModal>
			<div className={"modal-content "+ modalClass}>
				<div className='modal-header original'>
					{ShareModal(props)[0]}
					{/* <span className="modal-title">Are You Sure?</span> */}
					<button onClick={closeModal} className="close-button"></button>
				</div>
				<div className="modal-detail">
					{ShareModal(props)[1]}
					{/* <div className="text">
						Do you really want to hide this page?
						<br/>
						This action cannot be undone.
					</div> */}
				</div>
				<div className="modal-footer">
					{ShareModal(props)[2]}
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