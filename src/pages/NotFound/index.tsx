import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Notfound } from './styles';

const NotFound: React.FC = () => {
	return (
		<Notfound>
			<h1>Página não encontrada!</h1>
			<Link to="/">Voltar para a home</Link>
		</Notfound>
	);
};

export default memo(NotFound);
