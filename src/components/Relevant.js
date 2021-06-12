import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledRecommendation = styled.div`
	width: 320px;
	margin-left: 24px;
  margin-top: 40px;
	.recommendation-container{
		border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
		width: 100%;
    border-radius: 8px;
    background-color: #f6f8fa;
    display: flex;
    flex-direction: column;
		.recommendation-title{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 14px;
    	font-weight: 700;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	letter-spacing: -.35px;
    	color: #969aa2;
    	padding: 16px 0 0 20px;
		}
		.border{
			width: 280px;
    	border-bottom: 1px solid #dde1e7;
    	margin: 8px 0;
    	align-self: center;
		}
		.recommendation-contents{
			.recommendation-page{

				padding: 8px 20px;
    		display: block;
				&:hover{
					background-color: #eef1f4;
				}
				.title{
					font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			font-size: 16px;
    			font-weight: 700;
    			font-stretch: normal;
    			font-style: normal;
    			line-height: 1.25;
    			letter-spacing: normal;
    			color: #333;
    			overflow: hidden;
    			text-overflow: ellipsis;
				}
				.recommendation-page-source-container{
					display: inline-flex;
   				align-items: center;
    			width: 260px;
    			white-space: nowrap;
					.source{
						font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    			font-size: 11px;
    				font-weight: 400;
    				font-stretch: normal;
    				font-style: normal;
    				line-height: normal;
    				letter-spacing: normal;
    				color: #999;
					}
				}
			}
		}
	}
	.show-more{
		font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.3px;
    color: #00bdb8;
    text-align: left;
    padding: 12px 20px;
    background-color: #f6f8fa;
    cursor: pointer;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    width: 100%;
    display: flex;
    justify-content: center;
		&:hover{
			background-color: #eef1f4;
		}
		.expand{
			margin-left: 2px;
		}
	}
`;

const relevantPages = [
	{
		title: "async function - JavaScript | MDN - Mozilla",
		domain: 'developer.mozilla.org'
	},
	{
		title: "async와 await - 모던 JavaScript 튜토리얼",
		domain: 'ko.javascript.info'
	},
	{
		title: "MDN - Content-Type - Mozilla",
		domain: 'developer.mozilla.org'
	},
	{
		title: "JSON.stringify() - JavaScript | MDN - Mozilla",
		domain: 'developer.mozilla.org'
	},
	{
		title: "Node.appendChild() - Web API | MDN - Mozilla",
		domain: 'developer.mozilla.org'
	},
	{
		title: "루프와 반복 - JavaScript | MDN",
		domain: 'developer.mozilla.org'
	},
	{
		title: "Proxy - JavaScript 참고자료 - MDN - Mozilla",
		domain: 'developer.mozilla.org'
	},
]

function Relevant() {
	return (
			<StyledRecommendation>
				<div class="recommendation-container has-more" >
					<div class="recommendation-title" >People Also Read</div>
					<div class="border" ></div>
					<div class="recommendation-contents" >
						<div class="recommendation-contents" >
							{relevantPages.map(page =>(
								<Link 
									className="recommendation-page"
									to="">
									<div className="title">{page.title}</div>
									<div className="recommendation-page-source-container">
										<div className="source">{page.domain}</div>
									</div>
								</Link>
							))}
							<a id="recommend-page-0" class="recommendation-page undefined" href="/home/pages/705d6602-dc5e-3cb4-8d80-dbf770c6f040?access=document_relevant&amp;index=0&amp;url=https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage&amp;method=DOC_REC_DB_002" >
								<div class="title" >Window.localStorage - Web API | MDN - Mozilla</div>
								<div class="recommendation-page-source-container" >
									<div class="source" >developer.mozilla.org</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="show-more" >
					Show More
					<img class="expand" alt="more" src="https://getliner.com/src/images/expand.svg" />
				</div>
			</StyledRecommendation>

	);
}

export default Relevant;