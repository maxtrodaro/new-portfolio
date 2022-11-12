import React, { memo } from 'react';

import ProjectsItem from './ProjectsItem';
import Puket from '../../assets/puket.png';
import Compracerta from '../../assets/compracerta.png';
import Bagaggio from '../../assets/bagaggio.png';
import DoceMalu from '../../assets/doce-malu.png';
import Angel from '../../assets/angel.png';
import CasaTudo from '../../assets/casatudo.png';
import HanaBeauty from '../../assets/hana-beauty.png';
import Centopeia from '../../assets/centopeia.png';
import BrazzBrazz from '../../assets/brazz-brazz.png';
import LojasWessel from '../../assets/lojas-wessel.png';
import BunzlHigiene from '../../assets/bunzl-higiene.png';
import ConscienciaJeans from '../../assets/consciencia-jeans.png';
import { Container, Title, ProjectContainer } from './styles';

const Projects: React.FC = () => {
	return (
		<Container id="projetos">
			<section>
				<Title>Projetos que participei</Title>
				<ProjectContainer>
					<ProjectsItem
						items={[
							{
								imageSource: Compracerta,
								name: 'Compra Certa',
								linkProject: 'https://www.compracerta.com.br/',
								platform: 'VTEX IO',
								description:
									'Desenvolvimento VTEX e desenvolvimento VTEX IO do clube de compras Compra Certa, onde mantenho o site feito em CMS e realizei a migração do site VTEX CMS para VTEX IO.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: HanaBeauty,
								name: 'Hana Beauty',
								linkProject: 'https://www.hanabeauty.com.br/',
								platform: 'VTEX IO',
								description:
									'Desenvolvimento VTEX e VTEX IO da loja de maquiagem Hana Beauty, onde desenvolvi o projeto por completo, Home, Categoria, Produto e Checkout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Centopeia,
								name: 'Centopeia',
								linkProject: 'https://www.centopeia.com.br/',
								platform: 'VTEX IO',
								description:
									'Desenvolvimento VTEX e VTEX IO da loja de roupas infantil Centopeia, onde desenvolvi o projeto por completo, Home, Categoria, Produto e Checkout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: BrazzBrazz,
								name: 'Brazz Brazz',
								linkProject: 'https://www.brazzbrazz.com.br/',
								platform: 'VTEX IO',
								description:
									'Desenvolvimento VTEX da papelaria Brazz Brazz, desenvolvimento de layout responsivo na plataforma VTEX e VTEX IO, implantação da loja e reprodução de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: LojasWessel,
								name: 'Lojas Wessel',
								linkProject: 'https://www.lojaswessel.com.br/',
								platform: 'VTEX IO',
								description:
									'Desenvolvimento VTEX e VTEX IO do marketplace de produtos eletrônicos Lojas Wessel, onde desenvolvi o projeto por completo, Home, Categoria, Produto e Checkout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: BunzlHigiene,
								name: 'Bunzl Higiene',
								linkProject: 'https://www.bunzlhigiene.com.br/',
								platform: 'B2B - VTEX',
								description:
									'Desenvolvimento VTEX do marketplace B2B de produtos de higiene Bunzl Higiene, onde desenvolvi o projeto por completo, Home, Categoria, Produto e Checkout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: ConscienciaJeans,
								name: 'Consciência Jeans',
								linkProject: 'https://atacado.conscienciajeans.com.br/',
								platform: 'B2B - VTEX',
								description:
									'Desenvolvimento VTEX do marketplace B2B de moda Consciência Jeans, onde fiz alguns ajustes no frontend do Ecommerce.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Puket,
								name: 'Puket',
								linkProject: 'https://www.puket.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Bagaggio,
								name: 'Bagaggio',
								linkProject: 'https://www.bagaggio.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de malas Bagaggio, manutenção de scripts, otimização de performance, SEO e manutenção de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Angel,
								name: 'Angel',
								linkProject: 'https://www.angel.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de moda Angel, desenvolvimento de layout responsivo na plataforma VTEX, implantação da loja e reprodução de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: CasaTudo,
								name: 'Casa Tudo',
								linkProject: 'https://www.casatudo.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de home care Casatudo, desenvolvimento de layout responsivo na plataforma VTEX, implantação da loja e reprodução de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: DoceMalu,
								name: 'Doce Malu',
								linkProject: 'https://www.docemalu.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de doces Doce Malu, manutenção de scripts, otimização de performance, SEO e manutenção de layout.',
							},
						]}
					/>
				</ProjectContainer>
			</section>
		</Container>
	);
};

export default memo(Projects);
