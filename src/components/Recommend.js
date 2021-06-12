import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecommendationContainer = styled.div`
  width: 320px;
	margin-left: 24px;
	margin-top: 40px;
	box-sizing : border-box;
`;

const RecommendationTrending = styled.div`
	width: 100%;
  border-radius: 8px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
	
	.title{
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
	.contents{
		padding-inline-start: 0;
		margin: 0;
		padding: 3px 12px 12px;
    display: flex;
    flex-wrap: wrap;
		a{
			padding: 4px 8px;
    	border-radius: 8px;
    	font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 14px;
    	font-weight: 500;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: normal;
    	letter-spacing: -.35px;
    	color: #555;
    	margin-bottom: 8px;
			text-decoration: none;
			&:hover{
				background-color: #eef1f4;
				color: #00bdb8;
			}
		}
	}
`;

const keywords = [
	{
		id : 1,
		text : 'free',
		to : '/home/tags/free'
	},
	{
		id : 2,
		text : 'upload',
		to : '/home/tags/upload'
	},
	{
		id : 3,
		text : 'sharing',
		to : '/home/tags/sharing'
	},
	{
		id : 4,
		text : 'video',
		to : '/home/tags/video'
	},
	{
		id : 5,
		text : 'news',
		to : '/home/tags/news'
	},
	{
		id : 6,
		text : 'nlm',
		to : '/home/tags/nlm'
	},
	{
		id : 7,
		text : 'health',
		to : '/home/tags/health'
	},
	{
		id : 8,
		text : 'ncbi',
		to : '/home/tags/ncbi'
	},
	{
		id : 9,
		text : 'medline',
		to : '/home/tags/medline'
	},
	{
		id : 10,
		text : 'education',
		to : '/home/tags/education'
	},
	{
		id : 11,
		text : 'pubmed abstract',
		to : '/home/tags/pubmed abstract'
	},
	{
		id : 12,
		text : 'national library of medicine',
		to : '/home/tags/national library of medicine'
	}
]

const PagesContainer = styled.div`
	margin-top: 16px;
	width: 320px;
	box-sizing: border-box;
	.recommendation-container{
		width: 100%;
    border-radius: 8px;
		border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #f6f8fa;
    display: flex;
    flex-direction: column;
		.title{
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
		.contents{
			padding-inline-start: 0;
			margin: 0;
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
	}
`;

const recommendPages = [
	{
		id: "recommend-page-0",
		to : "",
		tag : ['google','google search', 'list','tips'],
		text : '20 Google Search Tips to Use Google More Efficiently - Lifehack',
		source: 'www.lifehack.org'
	},
	{
		id: "recommend-page-1",
		to : "",
		tag : ['books','david foster wallace', 'education'],
		text : 'How to Remember What You Read',
		source: 'fs.blog'
	},
	{
		id: "recommend-page-2",
		to : "",
		tag : ['application'],
		text : 'Co-WIN Application',
		source: 'selfregistration.cowin.gov.in'
	},
	{
		id: "recommend-page-3",
		to : "",
		tag : ['music'],
		text : 'Song Maker - Chrome Music Lab',
		source: 'musiclab.chromeexperiments.com'
	},
	{
		id: "recommend-page-4",
		to : "",
		tag : ['personality','mbti'],
		text : 'Free Personality test | 16Personlaities',
		source: 'www.16personalities.com'
	}
]

const StyledPage = styled(Link)`
	width: 320px;
	box-sizing:border-box;
	padding: 8px 20px;
	display: block;
	text-decoration: none;
	cursor: pointer;
	&:hover{
		background-color: #eef1f4;
	}
	.tag-list{
		margin-bottom: 4px;
		display:flex;
		flex-wrap:wrap;
		height: 15px;
		overflow-y: hidden;
		span{
			font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 12px;
    	font-weight: 500;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: 1.2;
    	height: 18px;
    	letter-spacing: -.3px;
    	color: #777;
    	margin-right: 6px;
		}
	}
	.title-trending{
			font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    	font-size: 16px;
   		font-weight: 700;
    	font-stretch: normal;
    	font-style: normal;
    	line-height: 1.25;
    	letter-spacing: normal;
    	color: #333;
    	display: -webkit-box;
    	-webkit-line-clamp: 2;
    	-webkit-box-orient: vertical;
    	overflow: hidden;
    	text-overflow: ellipsis;
			width: 280px;
		}
	.recommendation-page-source-container{
		display: inline-flex;
    align-items: center;
    white-space: nowrap;
		.source{font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 11px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #999;}
	}
`;

function PageLink(page){
	page = page.page
	return (
		<StyledPage>
			<div className="tag-list">
				{page.tag.map((t,index) => (
					<span key={index}>#{t}</span>
				))}
			</div>
			<div className="title-trending">{page.text}</div>
			<div className="recommendation-page-source-container">
				<div className="source">{page.source}</div>
			</div>
		</StyledPage>
	)
}

function Recommendation() {

  return (
    <RecommendationContainer>
      <RecommendationTrending>
				<div className="title">Trending Keywords</div>
				<div className="border"></div>
				<ul className="contents">
					{keywords.map(keyword => (
						<Link
							key= {keyword.id}
							to={keyword.to}
						>
							#{keyword.text}
						</Link>
					))}
				</ul>
			</RecommendationTrending>
			<PagesContainer>
				<div className="recommendation-container">
					<div className="title">Trending Pages</div>
					<div className="border"></div>
					<ul className="contents">
						{recommendPages.map((page,index) => (
							<PageLink page= {page} key = {index}/>
						))}
					</ul>
				</div>
				<div className="show-more">
					Show More
					<img alt = "more" src="https://getliner.com/src/images/expand.svg"/>
				</div>
				
			</PagesContainer>
    </RecommendationContainer>
  );
}

export default Recommendation;