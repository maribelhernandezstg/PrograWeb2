import styled from 'styled-components';


export const HeroContainer = styled.div`
background: -moz-linear-gradient(45deg, #efb8f2 0%, #32a59f 29%, #efb8f2 66%, #32a59f 100%);
background: -webkit-linear-gradient(45deg, #efb8f2 0%,#32a59f 29%,#efb8f2 66%,#32a59f 100%);
background: linear-gradient(45deg, #efb8f2 0%,#32a59f 29%,#efb8f2 66%,#32a59f 100%);
background-size: 400% 400%;
-webkit-animation: Gradient 15s ease infinite;
-moz-animation: Gradient 15s ease infinite;
animation: Gradient 15s ease infinite;
/*min-height: calc(100vh - 2rem);*/
display: flex;
flex-direction: column;
align-items: stretch;
justify-content: space-evenly;
overflow: hidden;
position: relative; 


&:before, 
&:after {
	content: "";
	width: 70vmax;
	height: 70vmax;
	position: absolute;
	background: rgba(255, 255, 255, 0.07);
	left: -20vmin;
	top: -20vmin;
	animation: morph 15s linear infinite alternate, spin 20s linear infinite;
	z-index: 1;
	will-change: border-radius, transform;
	transform-origin: 55% 55%;
	pointer-events: none; 
}
	
&:after {
    width: 70vmin;
    height: 70vmin;
    left: auto;
    right: -10vmin;
    top: auto;
    bottom: 0;
    animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;
    transform-origin: 20% 20%; 
}



@-webkit-keyframes Gradient {
	0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
}

@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%; }
  100% {
    border-radius: 40% 60%; } 
}

@keyframes spin {
  to {
    transform: rotate(1turn); 
  } 
}
	.st0{display:none;}
	.st1{display:inline;}
	.st2{opacity:0.29;}
	.st3{fill:#FFFFFF;}
	.st4{clip-path:url(#SVGID_2_);fill:#FFFFFF;}
	.st5{clip-path:url(#SVGID_4_);}
	.st6{clip-path:url(#SVGID_6_);}
	.st7{clip-path:url(#SVGID_8_);}
	.st8{clip-path:url(#SVGID_10_);}
	.st9{fill:none;}
	.st10{clip-path:url(#SVGID_12_);}
	.st11{opacity:0.7;}
	.st12{clip-path:url(#SVGID_14_);}
	.st13{opacity:0.2;}
	.st14{clip-path:url(#SVGID_16_);}
	.st15{opacity:0.3;fill:#FFFFFF;enable-background:new    ;}

`;

export const HeroContent = styled.div`
	height: calc(100vh-80px);
	max-height: 100%;
	/* width: 100vw; */
	padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: bold;

	@media screen and (max-width: 650px) {
		width: 100%;
	}
`;

export const HeroH1 = styled.h1`
	
`;

export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
	font-size: 1.4rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;
	transition: 0.2s ease-out;

	&:hover {
		background: #ffc500;
		transition: 0.2s ease-out;
		cursor: pointer;
		color: #000;
	}
`;
