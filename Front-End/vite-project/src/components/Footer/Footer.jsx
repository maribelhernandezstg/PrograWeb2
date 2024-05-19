import React from 'react';

import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialText,
	SocialLink,
	CopyRight,
	CopyRightWrap,
	
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>FLICKER
						</SocialLogo>
						<SocialText>
							<SocialLink
								href='/'
							>
								About
							</SocialLink>
							<SocialLink
								href='/'
							>
								Contact
							</SocialLink>
						
						</SocialText>
						
					</SocialMediaWrap>
					<CopyRightWrap>
						<CopyRight to='/'>@Copy Right 2023</CopyRight>
					</CopyRightWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
