import React, { memo } from 'react';

import iconVtex from '../../assets/icon-vtex.png';
import iconTray from '../../assets/icon-tray.png';
import iconLojaIntegrada from '../../assets/icon-loja-integrada.png';
import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<li>
				<a
					href="https://vtex.com/br-pt/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={iconVtex} alt="VTEX Logo" />
				</a>
			</li>
			<li>
				<a
					href="https://www.tray.com.br/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={iconTray} alt="Tray Logo" />
				</a>
			</li>
			<li>
				<a
					href="https://lojaintegrada.com.br/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={iconLojaIntegrada} alt="Loja Integrada Logo" />
				</a>
			</li>
		</Container>
	);
};

export default memo(Header);
