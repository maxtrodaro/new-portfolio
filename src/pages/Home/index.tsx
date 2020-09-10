import React, { memo } from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<Header></Header>
			<h1>Home</h1>
		</Container>
	);
};

export default memo(Home);
