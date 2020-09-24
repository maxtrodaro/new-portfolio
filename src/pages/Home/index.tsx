import React, { memo } from 'react';

import Header from '../../components/Header';
import BannerPrincipal from '../../components/BannerPrincipal';
import Services from '../../components/Services';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';

const Home: React.FC = () => {
	return (
		<>
			<Header></Header>
			<BannerPrincipal></BannerPrincipal>
			<Services></Services>
			<Projects></Projects>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
};

export default memo(Home);
