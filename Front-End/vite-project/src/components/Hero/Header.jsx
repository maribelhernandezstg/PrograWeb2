import React, { useState } from 'react';
import NavBar from '../Navbar/NavbarPerfil';
import Sidebar from '../Sidebar/Sidebar';
import '../Styles/hero_style.css';


function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
            <NavBar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
        </>
			
			
	);
}

export default Header;
