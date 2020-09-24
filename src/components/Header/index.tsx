import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
							<AnchorLink href='#home' offset={() => 100}>Home</AnchorLink>
						</li>
						<li>
							<AnchorLink href='#sobre' offset={() => 100}>Sobre</AnchorLink>
						</li>
						<li>
							<AnchorLink href='#projetos' offset={() => 100}>Projetos</AnchorLink>
						</li>
						<li>
							<AnchorLink href='#contato' offset={() => 100}>Contato</AnchorLink>
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
