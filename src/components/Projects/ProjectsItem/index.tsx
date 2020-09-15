import React, { memo } from 'react';

import { Container } from './styles';

interface ProjectsItemValue {
	description: string;
	name: string;
	imageSource: string;
}

interface ProjectsItemsProps {
	items: ProjectsItemValue[];
}

const ProjectsItem: React.FC<ProjectsItemsProps> = ({ items }) => (
	<>
		{items.map((item, i) => (
			<Container key={i} itemScope itemType="http://schema.org/CreativeWork">
				<div>
					<img
						src={item.imageSource}
						title={`Desenvolvimento VTEX - ${item.name}`}
						alt={`Desenvolvimento VTEX - ${item.name}`}
						itemProp="image"
					/>
				</div>
				<div>
					<h2 itemProp="name">
						<a
							href={item.imageSource}
							title={`Desenvolvimento VTEX - ${item.name}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.name}
						</a>
						<span itemProp="keywords">Desenvolvimento VTEX</span>
					</h2>
				</div>
				<div itemProp="description">
					<p>{item.description}</p>
				</div>
				<div className="linkToProject">
					<a
						href={item.imageSource}
						title={`Desenvolvimento VTEX - ${item.name}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver projeto
					</a>
				</div>
			</Container>
		))}
	</>
);

export default memo(ProjectsItem);
