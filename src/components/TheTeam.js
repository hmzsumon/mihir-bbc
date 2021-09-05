import React from 'react';
import styled from 'styled-components';

const TheTeam = () => {
	return (
		<Wrapper>
			<Header>
				<h1>THE TEM</h1>
			</Header>
			<Text>
				<p>
					Binance Bulls was created by two friends that have a love for the
					Binance Smart Chain ecosystem & have a love for art.
				</p>
			</Text>
			<ListWrapper>
				<ListItem>
					<Box></Box>
					<h2>Ox</h2>
				</ListItem>
				<ListItem>
					<Box></Box>
					<h2>CryptoJake</h2>
				</ListItem>
			</ListWrapper>
		</Wrapper>
	);
};

export default TheTeam;

const Wrapper = styled.div`
	padding: 3rem 4rem;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
`;
const Header = styled.div`
	grid-column: span 12;
	h1 {
		font-style: italic;
	}
`;
const Text = styled.div`
	grid-column: span 9;
	margin: 4rem 0;
`;
const ListWrapper = styled.ul`
	grid-column: span 12;
	display: flex;
	column-gap: 5rem;
`;
const ListItem = styled.li`
	display: flex;
	column-gap: 2rem;
`;
const Box = styled.div`
	width: 7rem;
	height: 7rem;
	background: var(--primaryColor);
	border-radius: 0.5rem;
`;
