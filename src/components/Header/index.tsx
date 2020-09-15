import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import Social from '../Social';
import logoImg from '../../assets/logo.png';
import { Container, Logo, Menu, MenuMobile } from './styles';

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
						<Social />
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
