import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ type, children, loading, ...rest }) => (
	<Container type={type} className={loading ? 'loading' : ''} {...rest}>
		{children}
	</Container>
);

export default Button;
