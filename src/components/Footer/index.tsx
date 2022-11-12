import React, { memo } from 'react';
import { BiCheck } from 'react-icons/bi';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from '../../assets/logo.png';
import Whatsapp from '../../assets/whatsapp.png';
import { Container, Infos, Copyright, FloatButton } from './styles';
import Social from '../Social';

const Footer = () => {
	return (
		<>
			<Container>
				<Infos>
					<img src={Logo} alt="Logo Eduardo Godoy" />
					<p>
						Olá, sou Eduardo Godoy e sou desenvolvedor há mais de 4 anos.
						Freelancer VTEX, VTEX IO e Loja Integrada.
					</p>
				</Infos>
				<Infos>
					<h2>Serviços</h2>
					<ul>
						<li>
							<BiCheck />
							<span>Criação de e-commerces</span>
						</li>
						<li>
							<BiCheck />
							<span>Análise de SEO e performance</span>
						</li>
						<li>
							<BiCheck />
							<span>Aumento de conversão para sites</span>
						</li>
						<li>
							<BiCheck />
							<span>Correções de bugs em sites</span>
						</li>
						<li>
							<BiCheck />
							<span>Evolução de e-commerce</span>
						</li>
						<li>
							<BiCheck />
							<span>Criação e desenvolvimento de layouts</span>
						</li>
					</ul>
				</Infos>
				<Infos className="web-sections">
					<h2>Seções</h2>
					<ul>
						<li>
							<AnchorLink href="#home" offset={() => 100}>
								Home
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href="#sobre" offset={() => 100}>
								Sobre
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href="#projetos" offset={() => 100}>
								Projetos
							</AnchorLink>
						</li>
						<li>
							<AnchorLink href="#contato" offset={() => 100}>
								Contatos
							</AnchorLink>
						</li>
					</ul>
				</Infos>
				<Infos>
					<h2>Contatos</h2>
					<ul>
						<li>
							<BiCheck />
							<span>Telefone</span>
							<p>+55 11 97238-4255</p>
						</li>
						<li>
							<BiCheck />
							<span>WhatsApp</span>
							<p>+55 11 97238-4255</p>
						</li>
						<li>
							<BiCheck />
							<span>dudurossigodoy2010@gmail.com.br</span>
						</li>
					</ul>
					<h2 style={{ marginTop: '20px' }}>Redes Sociais</h2>
					<Social />
				</Infos>
			</Container>
			<Copyright>
				© Copyright Todos os direitos reservados{' '}
				<b>Eduardo Godoy Desenvolvedor Freelancer</b>
			</Copyright>
			<FloatButton
				href="https://api.whatsapp.com/send?phone=5511972384255&text=Oi%20Eduardo%20Godoy!"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Whatsapp} alt="Link Whatsapp" />
			</FloatButton>
		</>
	);
};

export default memo(Footer);
