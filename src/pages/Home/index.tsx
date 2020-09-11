import React, { memo } from 'react';

import Header from '../../components/Header';
import BannerPrincipal from '../../components/BannerPrincipal';
import Services from '../../components/Services';

const Home: React.FC = () => {
	return (
		<>
			<Header></Header>
			<BannerPrincipal></BannerPrincipal>
			<Services></Services>
		</>
	);
};

export default memo(Home);
