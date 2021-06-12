import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../components/Modal';
import animationData from '../lotties/myhighlights.json'


const lottieSetting = {
	loop: true,
	autoplay: true,
	animationData : animationData,
	rendererSettings: {
		preserveAspectRatio : 'xMidYMid slice'
	}
};

const StyledHighlight = styled.div`
  position: relative;
  margin-top: 40px;
  z-index: 1;
  .my-highlights{
    .my-highlights-info{
    }
    }
    .search-message{
      font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
      display: flex;
      font-weight: 400;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      color: #969aa2;
      height: 34px;
      align-items: center;
      padding-left: 16px;
      font-size: 12px;
      letter-spacing: -.3px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  text-align: center;
  .title{
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 32px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: -.8px;
    color: #272b31;
    margin: 0 0 16px 16px;
  }
  .dropdown-container{
    position: relative;
    height: 32px;
    .info-button{
      margin-left: 10px;
      margin-top: 2px;
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
        background-color: #f6f8fa;
      }
    }
  }
  .add-highlights{
    padding: 11px 16px;
    width: 82px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 374.953px;
    margin-right: 16px;
    border-radius: 8px;
    border: 1px solid #dde1e7;
    background-color: #fff;
    color: #787d86;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    &:hover{
      background-color: #f6f8fa;
    }
    .highlights{
      
    }
    span{
      font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: -.35px;
      color: #787d86;
      margin-left: 8px;
      line-height: 1.2;
    }
  }
`;

const SummaryContainer = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 16px;
  .pages{
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.35px;
    color: #787d86;
    margin-right: 10px;
  }
  .middle-dot{
    background-image: url('https://getliner.com/src/images/dot.svg');
    width: 2px;
    height: 2px;
    align-self: center;
  }
  .highlights{
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -.35px;
    color: #787d86;
    margin-left: 10px;
  }
`;

const PageHeader = styled.div`
  position: sticky;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 0;
  z-index: 1;
  margin-top: 40px;
  width: 712px;
  height: 40px;
  background-color: #fff;
  z-index: 6;
  .left-container{
    display: flex;
    align-items: center;
    font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
    font-size: 14px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: -.35px;
    color: #52565d;
    .close-button{
      width: 32px;
      height: 32px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      background-image: url('https://getliner.com/src/images/close-light.svg');
      margin-right: 8px;
    }
  }
  .right-container{
    display: flex;
    .export{
      width: 32px;
      height: 32px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      background-position-x: 6px!important;
      background-image: url('https://getliner.com/src/images/export-header.svg');
      position: relative;
    }
    .tags-dropdown-container{
      display: inline;
      position: relative;
      .add-tags{
        width: 32px;
        height: 32px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 50%;
        border-radius: 50%;
        background-image: url('https://getliner.com/src/images/addtags-header.svg');
      }
    }
    .move-to-trash{
      width: 32px;
      height: 32px;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 50%;
      background-image: url('https://getliner.com/src/images/delete-header.svg');
      position: relative;
    }
  }
  .tab-container{
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 16px;
    .tab-item{
      padding: 11px 16px;
      border-radius: 8px;
      font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
      font-size: 14px;
      font-weight: 700;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -.35px;
      margin-right: 8px;
    }
    .tab-item.highlights{
      background-color: #eef1f4;
      color: #52565d;
    }
    .tab-item.tags{
      background-color: #fff;
      color: #969aa2;
      &:hover{
        background-color: #f6f8fa;
      }
    }
  }
  .filter-button-container{
    display: flex;
    align-items: center;
    width: 284px;
    .search-option-container{
      .filter.dropdown-container{
        display: flex;
        align-items: center;
        flex-shrink: 0;
        position: relative;
        height: 32px;
        .search-option-button{
          font-family: "Montserrat","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
          height: 32px;
          font-size: 12px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.5;
          letter-spacing: -.3px;
          color: #787d86;
          padding: 7px 0;
          margin-left: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          .search-option{
            margin-left: 8px;
          }
          .filter-icon{
            background-image: url('https://getliner.com/src/images/filter-closed.svg');
            width: 16px;
            height: 16px;
            margin: 0 4px;
            object-fit: contain;
          }
        }
      }
    }
    .tags-dropdown-container{
      display: inline;
      position: relative;
      .tag-filter-button{
        background-image: url('https://getliner.com/src/images/filter-header.svg');
        width: 28px;
        height: 28px;
        background-size: 24px;
        background-repeat: no-repeat;
        background-position: 50%;
        position: relative;
        top: 2px;
        &:hover{
          background-color: #f6f8fa;
          border-radius: 50%;
        }
      }
    }
    .focus{
      border: 1px solid #c6cbd3;
    }
    .search-form{
      width: 100%;
      flex-shrink: 1;
      display: flex;
      justify-content: space-between;
      margin-left: 16px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #dde1e7;
      .input-wrapper{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        .search-bar{
          appearance: none;
          width: calc(100% - 34px);
          height: 100%;
          flex-shrink: 1;
          font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
          font-size: 14px;
          font-weight: 400;
          font-stretch: normal;
          font-style: normal;
          line-height: 18px;
          letter-spacing: normal;
          color: #555;
          padding: 8px 16px;
        }
        #my-highlight-search{
          background-size: 24px;
          background-repeat: no-repeat;
          background-position: 50%;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          background-image: url('https://getliner.com/src/images/search-header.svg');
          margin-left: auto;
          margin-right: 6px;
          flex-shrink: 0;
        }
        .cancel-search-button{
          background-size: 24px;
          background-repeat: no-repeat;
          background-position: 50%;
          border-radius: 50%;
          background-image: url('https://getliner.com/src/images/cancel-search-header.svg');
          width: 28px;
          height: 28px;
          margin-left: auto;
          margin-right: 6px;
          flex-shrink: 0;
        }
      }
    }
    
    
  }

`;

const PageList = styled.div`
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
          .highlight-index{
            border-color: rgb(255, 255, 131);
            border-width: 0 0 0 4px;
            border-style: solid;
            margin: 2px 0;
          }
					.highlight-contents{
            margin: 0 16px;
						font-size: 14px;
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
        position:relative;
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
        .page-select-img{
          position: absolute;
          top: 5px;
          right: 5px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-image: url('https://getliner.com/src/images/check-light.svg');
          background-size: 14px 10px;
          background-position: 50%;
          background-repeat: no-repeat;
          z-index: 5;
          cursor: pointer;
        }
        .selected{
          background-color: rgb(0,189,184) !important;
        }
        .select{
          background-color: rgb(198,203,211) !important;
        }
			}
		}
    .page-tags{
      display: flex;
      flex-direction: row;
      .tag-icon{
        background-image: url('https://getliner.com/src/images/tag-icon.svg');
        width: 20px;
        height: 20px;
        margin: 2px 8px 12px 0;
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
        .vertical-line{
          border-left: 1px solid #777;
          height: 10px;
          margin: 0 6px;
        }
        .date{
          font-weight: 400;
          font-family: "Roboto","Noto Sans KR","Noto Sans JP","Noto Sans SC",sans-serif;
          color: #777;
          font-size: 11px;
          line-height: 1.5;
        }
			}
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
					background-image: url('https://getliner.com/src/images/share-header.svg')
				}
				.saved{
					position:relative;
					background-image: url('https://getliner.com/src/images/share-header.svg')
				}
				.dropdown-container{
					display:inline;
					position:relative;
					height:32px;
				}
				.share{
					background-image: url('https://getliner.com/src/images/export-header.svg')
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
					li:first-child .dropdown-icon.share-icon{
						background-image: url('https://getliner.com/src/images/summary-dropdown.svg');
					}
				
					li:last-child .dropdown-icon.share-icon{
						background-image: url('https://getliner.com/src/images/fulltext-dropdown.svg');
					}
          li:first-child .dropdown-icon.more-icon{
						background-image: url('https://getliner.com/src/images/edit-header.svg');
					}
          li:nth-child(2) .dropdown-icon.more-icon{
            background-image: url('https://getliner.com/src/images/original-dropdown.svg');
          }
					li:last-child .dropdown-icon.more-icon{
						background-image: url('https://getliner.com/src/images/delete-tooltip.svg');
					}
				}
			}
		}
		.page-list-separator{
			height: 8px;
    	border-bottom: 1px solid #eef1f4;
		}
	}
`;

function PageArticle({page,onToggle}) {
	const [moreModal, setmoreModal] = useState(false)
	const [isShare, setIsShare] = useState(false)
	const [modal, setModal] = useState(false)
  const [isShown, setIsShown] = useState(false);

	const onClick = () => {
		setmoreModal(prev => !prev)
	}
	//onClick이랑 합치면 좋을 듯
	const sharePage = () => {
		setIsShare(prev => !prev);
	}
	const closeModal = (event) => {
		setModal(prev => !prev);
		console.log(event.target);
	}

	return(
		<article 
      className="page-container"
      onMouseEnter={()=> setIsShown(true)}
      onMouseLeave={()=> setIsShown(false)}
    >
			<div className="page-contents-container">
				<div className={page.src === ''? "page-contents no-img":"page-contents"}>
					<div className="title-container">
						<h2 className="title">
							<Link to={page.id}>{page.title}</Link>
						</h2>
					</div>
					<div className="highlight">
            <div className="highlight-index"></div>
						<mark className="highlight-contents">
							{page.hightlight}
						</mark>
					</div>
				</div>
				{page.src !== '' && (
          <div className ="image-link">
					  <img alt="document" src={page.src}/>
            {isShown && <div onClick={onToggle} id={page.id} className={page.done ? "page-select-img selected": "page-select-img select"}></div>}
				  </div>
          )}
			</div>
			<div class="page-tags" >
        <div class="tag-icon" ></div>
        <div class="page-taglist-container" >
          <button class="add-tags" >Edit Tag</button>
        </div>
      </div>
      <div className="page-footer">
				<div className="page-source-container">
					<img src={page.favicon} alt="favicon" className="favicon"/>
					<div className="source">
						<a href={page.href} target="_blank" className="source-link">{page.href}</a>
					</div>
          <div className="vertical-line"></div>
          <div className="date">Jun 11, 2021</div>
				</div>
				<div className="page-button-container">
					<button 
						onClick={sharePage}
						className="circular-button saved"
					/>
          {isShare && <ul className="dropdown">
            <li>
              <span className="dropdown-icon share-icon"></span>
              Full text with highlights
            </li>
            <li>
              <span className="dropdown-icon share-icon"></span>
              Highlight summary
            </li>
          </ul>}
					<div className="dropdown-container">
						<button onClick={closeModal} className="circular-button share"></button>
            {modal && <Modal closeModal={closeModal}/>}
					</div>
					<div className="dropdown-container">
						<button onClick= {onClick}className="circular-button more"></button>
						{moreModal && <ul className="dropdown">
							<li onClick={closeModal}><span className="dropdown-icon more-icon"></span>
								Edit a title
							</li>
							<li onClick={closeModal}><span className="dropdown-icon more-icon"></span>
								View Original
							</li>
							<li onClick={closeModal}><span className="dropdown-icon more-icon"></span>
								Move to trash
							</li>
						</ul>}
					</div>
				</div>
			</div>
			<div className="page-list-separator"></div>
			{/* {modal && <Modal closeModal={closeModal}/>} */}
		</article>
	);
}

const GuideContainer = styled.div`
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
				}
			
`;

function MyHighlights() {
  const [isSearch, setIsSearch] = useState(false)
  const [lottie, setLottie] = useState(false);
  const [pause, setPause] = useState(false);
  const [pages, setPages] = useState([
    {
      id: 'detail1',
      href: 'https://react.vlpt.us/basic/20-useReducer.html',
      title: '20. useReducer 를 사용하여 상태 업데이트 로직 분리하기',
      src : 'https://ko.javascript.info/img/site_preview_en_1200x630.png',
      favicon: 'https://getliner.com/src/images/favicon.svg',
      hightlight : '여기서 state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, dispatch 는 액션을 발생시키는 함수라고 이해하시면 됩니다',
      done: false
    },
    {
      id: 'detail2',
      href: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in',
      title: 'for...in',
      favicon: 'https://developer.mozilla.org/static/img/favicon32.7f3da72dcea1.png',
      src : 'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png',
      hightlight : 'for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. (Symbol로 키가 지정된 속성은 무시합니다.)',
      done: false
    },
    {
      id: 'detail3',
      href: 'https://ko.javascript.info/async-await',
      title: 'async와 await',
      src : 'https://ko.javascript.info/img/site_preview_en_1200x630.png',
      favicon: 'https://getliner.com/src/images/favicon.svg',
      hightlight : '자바스크립트는 await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다립니다. 결과는 그 이후 반환됩니다',
      done: false
    },
    {
      id: 'detail4',
      href: 'https://gist.github.com/ninanung/767ca722befa8b0affe51ffa0064296b',
      title: '때늦은 React Hooks 시리즈 4탄 - useCallback/useRef',
      favicon: 'https://getliner.com/src/images/favicon.svg',
      src :'',
      hightlight : 'insert',
      done: false
    },
    {
      id: 'detail5',
      href: 'https://medium.com/hivelab-dev/react-js-tutorial-part1-c632e34fc32',
      title:'[실전 React.js] Part1. 개념 이해하기',
      favicon:"https://miro.medium.com/fit/c/120/120/1*sHhtYhaCe2Uc3IU0IgKwIQ.png",
      src:"https://miro.medium.com/max/1200/0*XCgoYU9sqt95P8J0.png",
      hightlight : '버튼 클릭으로 숫자가 증가하는 Counter 예제를 보겠습니다',
      done: false
    }
  ])
  const [pdfModal, setPdfModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const selectedPages = pages.filter(page=> page.done);

  const openModal = (event) =>{
    // const {target:{}}= event;
    console.log(event);

  }

  const onToggle = (event) => {
    const {target:{id}} = event;
    setPages(pages.map(page=>
        page.id === id ? {...page,done:!page.done} : page
      ))
  }

  const onClick = () => {
    setIsSearch(prev => !prev)
  }

  const lottieClick = () => {
    setLottie(prev=> !prev)
  }
	const onPause = () =>{
		setPause(prev => !prev)
	}
  return (
    <StyledHighlight>
      <div className="my-highlights" >
        <div className="my-highlights-info" >
          <TitleContainer >
            <h1 className="title" >My Highlights</h1>
            <div className="dropdown-container" >
              <button onClick={lottieClick}className="info-button myhighlights desktop" ></button>
              {lottie && (
						<GuideContainer id="for_you">
							<div className="tooltip-triangle" id="for_you"></div>
							<div className="tooltip-rectangle">
								<button className="close-btn" onClick={lottieClick}></button>
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
									<div className="text-title">My Highlights</div>
									<div className="text-contents">
                  All your work, including highlights and comments will be safely stored on this page.
									</div>
								</div>
							</div>
						</GuideContainer>
						)}
            </div>
            <button onClick={openModal} className="pdf add-highlights grey-border-btn">
                <img alt="add highlights" src='https://getliner.com/src/images/add-highlights.svg' />
                <span >PDF</span>
            </button>
            {/* <Modal/> */}
          </TitleContainer>
          <SummaryContainer >
            <div className="pages" >{pages.length}  Pages</div>
            <div className="middle-dot" ></div>
            <div className="highlights" >{pages.length} Highlights</div>
          </SummaryContainer>
          </div>
        </div>
        <PageHeader>
          {selectedPages.length > 0 ? <>
            <div className="left-container">
              <button className="close-button"></button>
              {selectedPages.length} page selected
            </div>
            <div className="right-container">
              <button className="export"></button>
              <div className="tags-dropdown-container">
                <button className="add-tags"></button>
              </div>
              <button className="move-to-trash"></button>
            </div>
          </>:( <>
            {!isSearch && <div className="tab-container" >
              <Link to="myhighlights/highlights" className="tab-item highlights active">Highlights</Link>
              <Link to="myhighlights/tags" className="tab-item tags inactive" href="/myhighlights/tags" >Tags</Link>
            </div>}
            
            <div className="filter-button-container" >
              {isSearch? <div className="search-option-container">
                <div className="filter dropdown-container">
                  <div className="search-option-button">
                    <div className="search-option">Search Option</div>
                    <span className="filter-icon"></span>
                  </div>
                </div>
              </div>
              :<div className="tags-dropdown-container" >
                <button className="tag-filter-button"></button>
              </div>}
              <div className={isSearch ? "search-form focus" : "search-form"} >
                <div className="input-wrapper" >
                  <input onClick={onClick}className="search-bar" placeholder="Search my highlights" type="text"/>
                  {isSearch ? <button onClick={onClick}className="cancel-search-button"></button>
                  : <span id="my-highlight-search" className="search-button circular-button" ></span>}
            
                </div>
              </div>
            </div>
          </>
          )}
        </PageHeader>
        {isSearch && <span className="search-message">Search results from my highlights</span>}
        <PageList>
				{pages.map((page,index)=> (
					<PageArticle key = {index} page={page} onToggle={onToggle}/>
				))}
			  </PageList>
      </StyledHighlight>
        
  );
}

export default MyHighlights;