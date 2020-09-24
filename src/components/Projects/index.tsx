import React, { memo } from 'react';

import ProjectsItem from './ProjectsItem';
import Puket from '../../assets/puket.png';
import Compracerta from '../../assets/compracerta.png';
import Bagaggio from '../../assets/bagaggio.png';
import MeiaSeda from '../../assets/meia-seda.png';
import DoceMalu from '../../assets/doce-malu.png';
import MyaHaas from '../../assets/myahaas.png';
import ViaNut from '../../assets/vianut.png';
import CasaTudo from '../../assets/casatudo.png';
import Tempomix from '../../assets/tempomix.png';
import { Container, Title, ProjectContainer } from './styles';

const Projects: React.FC = () => {
	return (
		<Container id="projetos">
			<section>
				<div>
					<Title>Projetos que participei</Title>
				</div>
				<ProjectContainer>
					<ProjectsItem
						items={[
							{
								imageSource: Compracerta,
								name: 'Compra Certa',
								linkProject: 'https://www.compracerta.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX e desenvolvimento VTEX IO do clube de compras Compra Certa, onde mantenho o site feito em CMS e realizei a migração do site VTEX CMS para VTEX IO.',
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
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.'
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
								imageSource: MeiaSeda,
								name: 'Meia de Seda',
								linkProject: 'https://www.meiadeseda.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de roupas Meia de Seda, manutenção de scripts, otimização de performance, SEO e manutenção de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Tempomix,
								name: 'Tempomix',
								linkProject: 'https://www.tempomix.com.br/',
								platform: 'Tray',
								description:
									'Desenvolvimento Tray da loja de roupas Tempomix, desenvolvimento de layout responsivo na plataforma Tray, implantação da loja e reprodução de layout.',
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
					<ProjectsItem
						items={[
							{
								imageSource: MyaHaas,
								name: 'Mya Haas',
								linkProject: 'https://www.myahaas.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de roupas Mya Haas, manutenção de scripts, otimização de performance, SEO e manutenção de layout.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: ViaNut,
								name: 'Via Nut',
								linkProject: 'https://www.vianut.com.br/',
								platform: 'VTEX',
								description:
									'Desenvolvimento VTEX da loja de nutrição Via Nut, desenvolvimento de layout responsivo na plataforma VTEX, implantação da loja e reprodução de layout.',
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
				</ProjectContainer>
			</section>
		</Container>
	);
};

export default memo(Projects);
