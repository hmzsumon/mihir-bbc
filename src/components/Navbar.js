import React from 'react';
import styled from 'styled-components';
const Navbar = () => {
	return (
		<Nav>
			<Brand>
				<h1>BBC</h1>
			</Brand>
			<Links>
				<li>Buy A Bull </li>
				<li>how it works</li>
				<li>Roadmap</li>
				<li>Team</li>
			</Links>
			<ButtonWrapper>
				<ConnectBtn>connect</ConnectBtn>
			</ButtonWrapper>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.div`
	display: grid;
	grid-template-columns: 30% 55% 15%;
	margin-bottom: 10rem;

	h1 {
		font-size: 10rem;
		font-weight: 700;
		font-style: italic;
	}
`;
const Brand = styled.div``;
const Links = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	font-size: 2rem;
	font-style: italic;
	text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ConnectBtn = styled.button`
	font-size: 2.2rem;
	font-style: italic;
	text-transform: uppercase;
	background: var(--primaryColor);
	padding: 1.5rem 3.5rem;
	border: none;
	border-radius: 0.5rem;
	color: #fff;
`;
