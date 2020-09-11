import React, { memo } from 'react';

import serviceBanner from '../../assets/service-banner.png';
import { Container, Image, TextInfo } from './styles';
import { BsCheckCircle } from 'react-icons/bs';

const Services: React.FC = () => {
	return (
		<Container>
			<Image>
				<img src={serviceBanner} alt="Banner Serviços" />
			</Image>
			<TextInfo>
				<h2>Eduardo Godoy - Desenvolvedor Freelancer Front End</h2>
				<h3>Programador Freelancer Front End VTEX</h3>
				<p>
					Trabalho com desenvolvimento há mais de 2 anos, especializado em
					análise de bugs, desenvolvimento focado em E-commerce, CRO e
					principalmente técnicas de SEO e UX/UI.
				</p>
				<ul>
					<li>
						<BsCheckCircle />
						<span>VTEX</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>SEO</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>Análise e Performance</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>CRO</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>UX/UI Design</span>
					</li>
				</ul>
			</TextInfo>
		</Container>
	);
};

export default memo(Services);
