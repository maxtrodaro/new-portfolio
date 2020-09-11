import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';
import { Container, Logo, Menu, MenuMobile } from './styles';
import {
	FaWhatsapp,
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
} from 'react-icons/fa';

const Header: React.FC = () => {
	return (
		<Container>
			<header>
				<Logo>
					<Link to="/">
						<img src={logoImg} alt="Logo Eduardo Godoy" />
					</Link>
				</Logo>
				<Menu>
					<ul>
						<li>
							<h2>Home</h2>
						</li>
						<li>
							<h2>Sobre</h2>
						</li>
						<li>
							<h2>Projetos</h2>
						</li>
						<li>
							<h2>Tecnologias</h2>
						</li>
						<li>
							<h2>Contato</h2>
						</li>
						<li>
							<a
								href="https://api.whatsapp.com/send?phone=5511972384255&text=Oi%20Eduardo%20Godoy!"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWhatsapp />
							</a>
						</li>
						<li>
							<a
								href="https://www.facebook.com/eduardo.godoy.58910"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaFacebookF />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/edu_rossi_godoy/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/eduardo-godoy-828221168/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
					</ul>
				</Menu>
				<MenuMobile>
					<span></span>
					<span></span>
					<span></span>
				</MenuMobile>
			</header>
		</Container>
	);
};

export default memo(Header);
