import React, { memo } from 'react';

import Button from '../Button';
import { Container, TextInfo, Image } from './styles';

import bannerPrincipal from '../../assets/banner-principal.png';

const BannerPrincipal = () => {
	return (
		<Container>
			<section>
				<TextInfo>
					<h2>Desenvolvedor Freelancer Front End</h2>
					<h3>Programador VTEX, VTEX IO e Wordpress</h3>
					<Button>Entre em contato agora</Button>
				</TextInfo>
				<Image>
					<img src={bannerPrincipal} alt="Banner Principal" />
				</Image>
			</section>
		</Container>
	);
};

export default memo(BannerPrincipal);
