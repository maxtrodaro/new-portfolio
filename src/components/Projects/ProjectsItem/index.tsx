import React, { memo } from 'react';

import { Container } from './styles';

interface ProjectsItemValue {
	description: string;
	name: string;
	imageSource: string;
	linkProject: string;
	platform: string;
}

interface ProjectsItemsProps {
	items: ProjectsItemValue[];
}

const ProjectsItem: React.FC<ProjectsItemsProps> = ({ items }) => (
	<>
		{items.map((item, i) => (
			<Container key={i} itemScope itemType="http://schema.org/CreativeWork">
				<a
					href={item.linkProject}
					target="_blank"
					rel="noopener noreferrer">
					<img
						src={item.imageSource}
						title={`Desenvolvimento ${item.platform} - ${item.name}`}
						alt={`Desenvolvimento ${item.platform} - ${item.name}`}
						itemProp="image"
					/>
					<h2 itemProp="name">
						<h3 title={`Desenvolvimento ${item.platform} - ${item.name}`}>{item.name}</h3>
						<p itemProp="keywords">Desenvolvimento {item.platform}</p>
					</h2>
					<span itemProp="description">{item.description}</span>
					<p>Ver projeto</p>
				</a>
			</Container>
		))}
	</>
);

export default memo(ProjectsItem);
