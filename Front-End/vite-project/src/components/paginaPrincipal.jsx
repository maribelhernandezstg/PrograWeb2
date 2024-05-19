
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../globalStyles';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
// import Pin from './components/Pin/Pin'; 
// import Modal from './components/Pin/Modal'; 
// import ModalAndPin from './components/Pin/ModalAndPin'; 
import FinalBoard from '../components/Pin/FinalBoard'; 


function paginaPrincipal() {
	return (
		<>
			<GlobalStyle />
			<Hero />
			{/* <Pin/> */}
			<FinalBoard/>
			<Footer />
		</>
	);
}

export default paginaPrincipal;