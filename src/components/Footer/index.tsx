import React, { memo } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from '../../assets/logo.png';
import { Container, Infos, Copyright } from './styles';
import Social from '../Social';

const Footer = () => {
	return (
		<>
			<Container>
				<Infos>
				<img src={Logo} alt="Logo Eduardo Godoy" />
				<p>Olá, sou Eduardo Godoy e sou desenvolvedor há mais de 2 anos. Freelancer VTEX, VTEX IO e Tray.</p>
			</Infos>
				<Infos className="web-sections">
				<h2>Seções</h2>
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
						<AnchorLink href='#contato' offset={() => 100}>Contatos</AnchorLink>
					</li>
				</ul>
			</Infos>
				<Infos>
				<h2>Serviços</h2>
				<ul>
					<li>
						<BsCheckCircle />
						<span>Desenvolvimento de e-commerces</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>Melhorias e correções para sites</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>Criação e desenvolvimento de layouts</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>Análise de SEO e performance</span>
					</li>
					<li>
						<BsCheckCircle />
						<span>Migração de plataformas</span>
					</li>
				</ul>
			</Infos>
				<Infos>
					<h2>Contatos</h2>
					<ul>
					<li>
						<BsCheckCircle />
						<span>Telefone</span>
						<p>+55 11 97238-4255</p>
					</li>
					<li>
						<BsCheckCircle />
						<span>WhatsApp</span>
						<p>+55 11 97238-4255</p>
					</li>
					<li>
						<BsCheckCircle />
						<span>dudurossigodoy2010@gmail.com.br</span>
					</li>
				</ul>
					<h2 style={{marginTop: "20px"}}>Redes Sociais</h2>
					<Social />
				</Infos>
			</Container>
			<Copyright>© Copyright Todos os direitos reservados <b>Eduardo Godoy Desenvolvedor Freelancer</b></Copyright>
		</>
	)
}

export default memo(Footer);
