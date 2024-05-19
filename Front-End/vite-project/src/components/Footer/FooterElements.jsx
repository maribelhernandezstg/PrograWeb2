import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: #996888;
`;

export const FooterWrap = styled.div`
	padding: 16px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1300px;

`;

export const SocialMedia = styled.section`
	max-width: 1300px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 6px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
`;

export const CopyRightWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin-left:auto;
	margin-right:auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	} ;
`;


export const CopyRight = styled.p`
	color: #fff;
	text-decoration: none;
	font-size: 1rem;
	display: flex;
	align-items: center;
	
`;

export const SocialText = styled.div`
	display: flex;
	justify-content: end;
	align-items: center;
	width: 240px;
`;

export const SocialLink = styled.a`
	color: #fff;
	font-size: 16px;
	margin-right:0.5rem;
`;
