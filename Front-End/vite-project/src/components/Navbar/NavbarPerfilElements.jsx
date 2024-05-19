import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiAlignJustify } from 'react-icons/fi';

export const Nav = styled.nav`
    background: linear-gradient(135deg, #efb8f2, #32a59f);
	height: 60px;
	display: flex;
	justify-content: start;
	font-weight: 700;
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	align-items: start;
	text-decoration: none;
	cursor: pointer;
	margin-left:1rem;
	margin-top:0.7rem;

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-175%, 100%);
		font-weight: bold;
	}
`;

export const Bars = styled(FiAlignJustify)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
	margin-top: 1rem;
`;
