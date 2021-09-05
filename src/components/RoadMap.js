import React from 'react';
import styled from 'styled-components';

const RoadMap = () => {
	return (
		<Wrapper>
			<Header>
				<h1>ROADMAP</h1>
			</Header>

			<Text>
				<p>
					Once we have hit the precentage of mints we will begin working on the
					state goal
				</p>
			</Text>
			<ListWrapper>
				<ListItem>
					<h2>10%</h2>
					<p>
						5 Bulls will be randomly dirdropped to our early adopters Begin
						social media marketing push & banner advertisments{' '}
					</p>
				</ListItem>
				<ListItem>
					<h2>50%</h2>
					<p>
						$20,000 Donation with the help of the community choosing what
						organization allocate the money too Partner with secondary
						marketplace
					</p>
				</ListItem>

				<ListItem>
					<h2>75%</h2>
					<p>
						Exclusive Binance Bull Merch will be released (T Shirts, Hoodies &
						More) $5,000 BNB Giveaway
					</p>
				</ListItem>

				<ListItem>
					<h2>90%</h2>

					<p>
						Community grant/wallet is launched with $25,000 Bull Marketplace
						Released
					</p>
				</ListItem>

				<ListItem>
					<h2>90%</h2>
					<p>
						Community grant/wallet is launched with $25,000 Bull Marketplace
						Released
					</p>
				</ListItem>
			</ListWrapper>
		</Wrapper>
	);
};

export default RoadMap;

const Wrapper = styled.div`
	padding: 3rem 4rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	// grid-template-rows: repeat(3, 1fr);
`;
const Header = styled.div`
	grid-column: span 12;
	margin-bottom: 2rem;

	h1 {
		font-style: italic;
	}
`;
const Text = styled.div`
	grid-column: span 12;
	margin-bottom: 5rem;
`;
const ListWrapper = styled.div`
	grid-column: span 10;
`;

const ListItem = styled.div`
	display: flex;
	align-items: center;
	margin: 2rem 0;

	h2 {
		margin-right: 1rem;
		background: var(--primaryColor);
		padding: 1rem 0.5rem;
		border-radius: 0.5rem;
	}
`;
