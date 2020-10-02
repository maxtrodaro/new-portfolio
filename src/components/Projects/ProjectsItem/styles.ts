import styled from 'styled-components';

export const Container = styled.article`
	background: var(--white);
	border-radius: 10px;
	box-shadow: 0 10px 20px 0 rgba(68, 88, 144, 0.2);
	cursor: pointer;
	margin-bottom: 40px;
	padding: 10px 20px 20px;
	transition: all 0.3s ease-in-out;
	width: 30%;

	@media (max-width: 767px) {
		width: 100%;
	}

	&:hover {
		transform: scale(1.1);
	}

	img {
		display: block;
		margin: auto;
		width: 50%;
		max-width: 100%;
	}

	div {
		font-size: 18px;
		text-align: center;

		h3 {
			color: var(--primary-color);
			letter-spacing: 0.4px;
			text-transform: uppercase;
		}

		p {
			color: var(--secondary-color);
		}
	}

	span {
		display: block;
		color: var(--primary-color);
		font-size: 12px;
		margin-top: 5px;
		text-align: center;
	}

	span {
		display: none;
	}

	p {
		color: var(--primary-color);
		display: block;
		font-size: 14px;
		font-weight: 600;
		margin-top: 20px;
		text-align: center;
	}
`;
