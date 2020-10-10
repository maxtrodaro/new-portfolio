import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classNames from 'classnames';
import { RiCloseFill } from 'react-icons/ri';
import { isMobile } from 'react-device-detect';

import Social from '../Social';
import logoImg from '../../assets/logo.png';
import {
	Container,
	Logo,
	Menu,
	MenuMobile,
	NavMenuMobile,
	Overlay,
} from './styles';

const Header: React.FC = () => {
	const [menuMobile, setMenuMobile] = useState(false);

	const handleOpenMenu = () => {
		setMenuMobile(!menuMobile);
	};

	return (
		<Container>
			<header>
				<Logo>
					<Link to="/">
						<img src={logoImg} alt="Logo Eduardo Godoy" />
					</Link>
				</Logo>
				{isMobile ? (
					<>
						<MenuMobile onClick={handleOpenMenu}>
							<span></span>
							<span></span>
							<span></span>
						</MenuMobile>
						<NavMenuMobile
							className={classNames({
								menuOpen: menuMobile,
							})}
						>
							<div>
								<p>Menu</p>
								<RiCloseFill onClick={handleOpenMenu} />
							</div>
							<ul>
								<li>
									<AnchorLink
										href="#home"
										offset={() => 100}
										onClick={handleOpenMenu}
									>
										Home
									</AnchorLink>
								</li>
								<li>
									<AnchorLink
										href="#sobre"
										offset={() => 100}
										onClick={handleOpenMenu}
									>
										Sobre
									</AnchorLink>
								</li>
								<li>
									<AnchorLink
										href="#projetos"
										offset={() => 100}
										onClick={handleOpenMenu}
									>
										Projetos
									</AnchorLink>
								</li>
								<li>
									<AnchorLink
										href="#contato"
										offset={() => 150}
										onClick={handleOpenMenu}
									>
										Contato
									</AnchorLink>
								</li>
								<Social />
							</ul>
						</NavMenuMobile>
						<Overlay
							className={classNames({
								menuOpen: menuMobile,
							})}
							onClick={handleOpenMenu}
						></Overlay>
					</>
				) : (
					<Menu>
						<ul>
							<li>
								<AnchorLink href="#home" offset={() => 100}>
									Home
								</AnchorLink>
							</li>
							<li>
								<AnchorLink href="#sobre" offset={() => 70}>
									Sobre
								</AnchorLink>
							</li>
							<li>
								<AnchorLink href="#projetos" offset={() => 100}>
									Projetos
								</AnchorLink>
							</li>
							<li>
								<AnchorLink href="#contato" offset={() => 80}>
									Contato
								</AnchorLink>
							</li>
							<Social />
						</ul>
					</Menu>
				)}
			</header>
		</Container>
	);
};

export default memo(Header);
