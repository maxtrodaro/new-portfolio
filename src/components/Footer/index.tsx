import React, { memo } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

import Logo from '../../assets/logo.png';
import { Container, Infos } from './styles';
import Social from '../Social';

const Footer = () => {
	return (
		<Container>
			<Infos>
				<img src={Logo} alt="Logo Eduardo Godoy" />
				<p>Olá, sou Eduardo Godoy e sou desenvolvedor há mais de 2 anos. Freelancer VTEX, VTEX IO e Tray.</p>
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
						<span>Email</span>
						<p>dudurossigodoy2010@gmail.com.br</p>
					</li>
				</ul>
				<h2>Redes Sociais</h2>
				<Social />
			</Infos>
		</Container>
	)
}

export default memo(Footer);
