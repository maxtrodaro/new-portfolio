import React, { memo } from 'react';

import ProjectsItem from './ProjectsItem';
import Puket from '../../assets/puket.png';
import { Container, Title, ProjectContainer } from './styles';

const Projects: React.FC = () => {
	return (
		<Container>
			<section>
				<div>
					<Title>Projetos que participei</Title>
				</div>
				<ProjectContainer>
					<ProjectsItem
						items={[
							{
								imageSource: Puket,
								name: 'Puket',
								description:
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Puket,
								name: 'Puket',
								description:
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Puket,
								name: 'Puket',
								description:
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.',
							},
						]}
					/>
					<ProjectsItem
						items={[
							{
								imageSource: Puket,
								name: 'Puket',
								description:
									'Desenvolvimento VTEX da loja de roupas Puket, onde desesenvolvi o lazyload da home page e todas as vitrines do ecommerce.',
							},
						]}
					/>
				</ProjectContainer>
			</section>
		</Container>
	);
};

export default memo(Projects);
