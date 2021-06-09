import React from 'react';
import styled from 'styled-components';

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

	}
`;

function TrendingPages() {
	return (
		<PagesContainer>
			<div className="recommendation-container">
				<div className="title">Trending Pages</div>
			</div>
			<div className="show-more">

			</div>
		</PagesContainer>
	);
}

export default TrendingPages;