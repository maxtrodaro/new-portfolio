import React, { memo } from 'react';

import Header from '../../components/Header';
import BannerPrincipal from '../../components/BannerPrincipal';
import Services from '../../components/Services';
import Projects from '../../components/Projects';

const Home: React.FC = () => {
	return (
		<>
			<Header></Header>
			<BannerPrincipal></BannerPrincipal>
			<Services></Services>
			<Projects></Projects>
		</>
	);
};

export default memo(Home);
