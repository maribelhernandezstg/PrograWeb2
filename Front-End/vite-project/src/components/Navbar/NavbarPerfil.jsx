import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './NavbarPerfilElements';

function NavbarPerfil({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>FLICKER</NavLink>
				<NavIcon onClick={toggle}>
				
					<Bars />
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavbarPerfil;
