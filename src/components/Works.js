import React from 'react';
import styled from 'styled-components';

const Works = () => {
	return (
		<WorksWrapper>
			<WorksTop>
				<h1>HOW IT WORKS</h1>
			</WorksTop>
			<WorksBottom>
				<Text>
					<p>
						{' '}
						Every one of 10,00 Binance Bulls are unique & generated fro over 100
						traits including, Mouth Expression, Eyes, Clothing, Background Color
						& More.{' '}
					</p>

					<p>
						Your bull is stored as an ERC721 token on the Binance Smart Chain &
						hosted on IPS.{' '}
					</p>

					<p>
						There are no bonding curves here. Buying a bull costs 0.15 bnb.{' '}
					</p>
				</Text>
				<BoxContainer>
					<Box></Box>
				</BoxContainer>
			</WorksBottom>
		</WorksWrapper>
	);
};

export default Works;
const WorksWrapper = styled.div`
	padding: 3rem 4rem;
	display: grid;
	grid-template-columns: 1fr;
`;
const WorksTop = styled.div`
	h1 {
		font-style: italic;
	}
`;
const WorksBottom = styled.div`
	margin: 2rem 0;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;
const Text = styled.div`
	display: grid;
	gird-template-rows: repeat(3, 1fr);
`;
const BoxContainer = styled.div`
	margin-left: 5rem;
`;
const Box = styled.div`
	width: 17rem;
	height: 17.5rem;
	background: var(--primaryColor);
	border-radius: 0.5rem;
`;
