import React, { memo } from 'react';

import Social from '../Social';
import serviceBanner from '../../assets/service-banner.png';
import { Container, Image, TextInfo } from './styles';
import { BiCheck } from 'react-icons/bi';

const Services: React.FC = () => {
	return (
		<Container id="sobre">
			<Image>
				<img src={serviceBanner} alt="Banner Serviços" />
			</Image>
			<TextInfo>
				<h1>Eduardo Godoy - Desenvolvedor Freelancer Front End</h1>
				<h2>Programador Freelancer Front End</h2>
				<p>
					Trabalho com desenvolvimento há mais de 2 anos, especializado em
					aumento de conversão, análise de bugs, desenvolvimento focado em
					E-commerce, CRO e principalmente técnicas de SEO e UX/UI.
				</p>
				<p>
					Atualmente atuo como Desenvolvedor Front-end VTEX na{' '}
					<strong>Jussi</strong>, na squad de conversão do maior clube de
					compras do Brasil, o{' '}
					<a
						href="https://loja.compracerta.com.br/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Compra Certa
					</a>
					, não só desenvolvendo tarefas, mas ajudando no crescimento do produto
					como um todo.
				</p>
				<p className="item_description">
					Desenvolvimento VTEX, criação de sites com sites com muito SEO, sempre
					pensando a maior conversão para seu site.
				</p>
				<p className="item_description">
					Desenvolvimento Tray, criação de sites com sites com muito SEO, sempre
					pensando a maior conversão para seu site.
				</p>
				<p className="item_description">
					Desenvolvimento Loja Integrada, criação de sites com sites com muito
					SEO, sempre pensando a maior conversão para seu site.
				</p>
				<p className="item_description">
					Desenvolvedor Front End VTEX focado no SEO para melhorar o
					ranqueamento do seu site no Google.
				</p>
				<p className="item_description">
					Desenvolvedor Front End Tray focado no SEO para melhorar o
					ranqueamento do seu site no Google.
				</p>
				<p className="item_description">
					Desenvolvedor Front End Loja Integrada focado no SEO para melhorar o
					ranqueamento do seu site no Google.
				</p>
				<p className="item_description">
					Desenvolvimento VTEX, criando o site da sua maneira e sempre seguindo
					as melhores práticas para que seu negócio venda cada vez mais.
				</p>
				<p className="item_description">
					Desenvolvimento Tray, criando o site da sua maneira e sempre seguindo
					as melhores práticas para que seu negócio venda cada vez mais.
				</p>
				<p className="item_description">
					Desenvolvimento Loja Integrada, criando o site da sua maneira e sempre
					seguindo as melhores práticas para que seu negócio venda cada vez
					mais.
				</p>
				<p className="item_description">
					Criação de estratégias de SEO (SEO On-Page, Marcação Schema), para
					aumentar seu tráfego orgânico (Ranqueamento no Google), com isso seu
					site começara a vender mais sem precisar pagar anúncio para o Google.
				</p>
				<p className="item_description">
					Realizo ajustes em lojas VTEX para melhor experiência do seu cliente
					ao acessar seu site.
				</p>
				<p className="item_description">
					Realizo ajustes em lojas Tray para melhor experiência do seu cliente
					ao acessar seu site.
				</p>
				<p className="item_description">
					Realizo ajustes em lojas Loja Integrada para melhor experiência do seu
					cliente ao acessar seu site.
				</p>
				<p className="item_description">
					Desenvolvedor VTEX com alto conhecimento no Master Data da VTEX e
					realizando a integração completa do seu site.
				</p>
				<p className="item_description">Evolução de e-commerce VTEX.</p>
				<p className="item_description">Evolução de e-commerce Tray.</p>
				<p className="item_description">
					Evolução de e-commerce Loja Integrada.
				</p>
				<ul>
					<li title="Freelancer VTEX">
						<BiCheck />
						<span itemProp="keywords">VTEX, VTEX IO</span>
					</li>
					<li title="Freelancer Tray">
						<BiCheck />
						<span itemProp="keywords">Tray</span>
					</li>
					<li title="Freelancer Loja Integrada">
						<BiCheck />
						<span itemProp="keywords">Loja Integrada</span>
					</li>
					<li title="Especialista SEO">
						<BiCheck />
						<span itemProp="keywords">SEO</span>
					</li>
					<li title="Performance de sites">
						<BiCheck />
						<span itemProp="keywords">Análise e Performance</span>
					</li>
					<li title="Análise de dados - CRO">
						<BiCheck />
						<span itemProp="keywords">CRO</span>
					</li>
					<li title="Freelancer Loja Integrada">
						<BiCheck />
						<span itemProp="keywords">Evolução de e-commerce</span>
					</li>
					<li title="Designer Gráfico - UX Design - UI Design">
						<BiCheck />
						<span itemProp="keywords">UX/UI Design</span>
					</li>
					<Social />
				</ul>
			</TextInfo>
		</Container>
	);
};

export default memo(Services);
