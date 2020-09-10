import React, { memo } from 'react';
import { Link } from 'react-router-dom';

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
					<ul className="e-header__right__list">
						<li className="e-header__right__list__item">
							<h2 className="e-header__right__list__item__title">Sobre</h2>
						</li>
						<li className="e-header__right__list__item">
							<h2 className="e-header__right__list__item__title">Projetos</h2>
						</li>
						<li className="e-header__right__list__item">
							<h2 className="e-header__right__list__item__title">
								Tecnologias
							</h2>
						</li>
						<li className="e-header__right__list__item">
							<h2 className="e-header__right__list__item__title">Contato</h2>
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
