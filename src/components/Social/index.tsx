import React, { memo } from 'react';
import {
	FaWhatsapp,
	FaLinkedinIn,
	FaFacebookF,
	FaInstagram,
} from 'react-icons/fa';

import { Container } from './styles';

const Social: React.FC = () => {
	return (
		<Container>
			<li>
				<a
					href="https://api.whatsapp.com/send?phone=5511972384255&text=Oi%20Eduardo%20Godoy!"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaWhatsapp />
				</a>
			</li>
			<li>
				<a
					href="https://www.facebook.com/eduardo.godoy.58910"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebookF />
				</a>
			</li>
			<li>
				<a
					href="https://www.instagram.com/edu_rossi_godoy/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/eduardo-godoy-828221168/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn />
				</a>
			</li>
		</Container>
	);
};

export default memo(Social);
