import React, { memo } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container, TextInfo } from './styles';

const BannerPrincipal = () => {
	return (
		<Container id="home">
			<section>
				<TextInfo>
					<h2>Desenvolvedor Freelancer Front End</h2>
					<h3>Programador VTEX, VTEX IO e Loja Integrada</h3>
					<AnchorLink href="#contato" offset={() => 80}>
						Entre em contato agora
					</AnchorLink>
				</TextInfo>
			</section>
		</Container>
	);
};

export default memo(BannerPrincipal);
