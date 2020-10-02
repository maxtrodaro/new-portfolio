import React, { memo } from 'react';

import Social from '../Social';
import serviceBanner from '../../assets/service-banner.png';
import { Container, Image, TextInfo } from './styles';
import { BsCheckCircle } from 'react-icons/bs';

const Services: React.FC = () => {
	return (
		<Container id="sobre">
			<Image>
				<img src={serviceBanner} alt="Banner Serviços" />
			</Image>
			<TextInfo>
				<h2>Eduardo Godoy - Desenvolvedor Freelancer Front End</h2>
				<h3>Programador Freelancer Front End</h3>
				<p>
					Trabalho com desenvolvimento há mais de 2 anos, especializado em
					análise de bugs, desenvolvimento focado em E-commerce, CRO e
					principalmente técnicas de SEO e UX/UI.
				</p>
				<ul>
					<li title="Freelancer VTEX">
						<BsCheckCircle />
						<span itemProp="keywords">VTEX</span>
					</li>
					<li title="Freelancer VTEX IO">
						<BsCheckCircle />
						<span itemProp="keywords">VTEX IO</span>
					</li>
					<li title="Freelancer Tray">
						<BsCheckCircle />
						<span itemProp="keywords">Tray</span>
					</li>
					<li title="Freelancer Loja Integrada">
						<BsCheckCircle />
						<span itemProp="keywords">Loja Integrada</span>
					</li>
					<li title="Especialista SEO">
						<BsCheckCircle />
						<span itemProp="keywords">SEO</span>
					</li>
					<li title="Performance de sites">
						<BsCheckCircle />
						<span itemProp="keywords">Análise e Performance</span>
					</li>
					<li title="Análise de dados - CRO">
						<BsCheckCircle />
						<span itemProp="keywords">CRO</span>
					</li>
					<li title="Designer Gráfico - UX Design - UI Design">
						<BsCheckCircle />
						<span itemProp="keywords">UX/UI Design</span>
					</li>
					<Social />
				</ul>
			</TextInfo>
		</Container>
	);
};

export default memo(Services);
