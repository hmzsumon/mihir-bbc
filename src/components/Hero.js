import React from 'react';
import styled from 'styled-components';
import Icon from '../images/BinanceBulls_icon.png';

const Hero = () => {
	return (
		<HeroWrapper>
			<HeroTop>
				<BoxContainer>
					<Box></Box>
					<Box></Box>
					<Box></Box>
					<Box></Box>
				</BoxContainer>
				<TopContent>
					<div>
						<div className='header'>
							<h1>WELCOME TO BINANCE BULL CLUB</h1>
						</div>
						<div className='text'>
							<p>
								BBC is a collection of 7,777 randomly generated Bull NFTs stored
								on the Binance Smart Chain & hosted on ipfs.{' '}
							</p>
						</div>
					</div>
				</TopContent>
			</HeroTop>
			<HeroMiddle>
				<MiddleBox>
					<p className='text_top'>
						The sale has stareted. Select how many you would like to mint.{' '}
					</p>

					<MiddleContentWrapper>
						<MiddleContent>
							<h2>become bullish</h2>
							<MiddleBtnContainer className='button-container'>
								<div>
									<table>
										<tr>
											<td>+</td>
											<td>1</td>
											<td>-</td>
										</tr>
									</table>
								</div>
								<div>
									<button>MINT NOW</button>
								</div>
							</MiddleBtnContainer>
						</MiddleContent>
						<MiddleIcon>
							<div>
								<img src={Icon} alt='' />
							</div>
						</MiddleIcon>
					</MiddleContentWrapper>
					<p className='text_bottom'>Minting Cost 0.15BNB</p>
				</MiddleBox>
			</HeroMiddle>
			<HeroBottom>
				<p>VERIFIED SMART CONTRACT ADDRESS: 0x0000000000000000</p>
			</HeroBottom>
		</HeroWrapper>
	);
};

export default Hero;

const HeroWrapper = styled.div`
	padding: 3rem 4rem;
`;
const HeroTop = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	margin-bottom: 10rem;
`;

const BoxContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1.5rem;
`;

const Box = styled.div`
	width: 17rem;
	height: 17.5rem;
	background: var(--primaryColor);
	border-radius: 0.5rem;
`;
const TopContent = styled.div`
	margin-left: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.header {
		max-width: 70%;
		margin-bottom: 2rem;
		h1 {
			font-size: 4rem;
			line-height: 4rem;
		}
	}

	.text {
		max-width: 90%;
		p {
			font-size: 2rem;
			text-transform: uppercase;
		}
	}
`;

const HeroMiddle = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;
const MiddleBox = styled.div`
	maw-width: 100vw;
	height: 20rem;
	background: var(--primaryColor);
	color: black;
	text-align: center;
	padding: 1rem 2rem;

	.text_top {
		text-transform: uppercase;
		font-size: 1.6rem;
		font-style: italic;
	}

	.text_bottom {
		text-transform: uppercase;
		font-size: 1.8rem;
	}
`;
const MiddleContentWrapper = styled.div`
	margin: 2rem 0;
	display: grid;
	grid-template-columns: 3fr 1fr;
`;

const MiddleContent = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 3fr;
	justify-items: space-between;
	align-items: center;
	// background: green;

	h2 {
		text-transform: uppercase;
		text-align: left;
	}
`;
const MiddleBtnContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	// background: red;

	table {
		border: 0.1rem solid black;
		border-collapse: collapse;
	}
	td {
		border: 0.2rem solid black;
		padding: 1.5rem;
		font-size: 2rem;
		cursor: pointer;
	}
	button {
		padding: 1rem 2rem;
		font-size: 2rem;
		border: none;
		background: black;
		color: #fff;
	}
`;

const MiddleIcon = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	img {
		width: 10rem;
	}
`;

const HeroBottom = styled.div`
	text-align: center;
	margin: 1rem 0;
`;
