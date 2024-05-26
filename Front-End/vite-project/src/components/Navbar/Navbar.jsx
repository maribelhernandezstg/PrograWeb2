import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>PICFINITY</NavLink>
				<NavIcon onClick={toggle}>
				
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;
