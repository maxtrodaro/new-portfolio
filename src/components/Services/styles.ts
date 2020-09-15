import styled from 'styled-components';

export const Container = styled.section`
	align-items: center;
	display: flex;
	margin: 0 auto;
	max-width: 1200px;
	padding: 50px 0;
	position: relative;
	width: 100%;
`;

export const Image = styled.section`
	align-items: center;
	display: flex;
	flex-basis: 50%;

	img {
		height: auto;
		width: 100%;
	}
`;

export const TextInfo = styled.section`
	align-self: flex-start;
	color: var(--light-black);
	display: block;
	flex-basis: 50%;

	h2 {
		color: var(--light-black);
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 40px;
	}

	h3 {
		color: var(--secondary-color);
		font-size: 22px;
		margin-bottom: 20px;
	}

	p {
		color: var(--light-black);
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 20px;
	}

	ul {
		margin-top: 20px;
		li {
			align-items: center;
			display: flex;
			margin-bottom: 10px;

			svg {
				color: var(--secondary-color);
				height: 25px;
				width: 25px;
			}

			span {
				font-size: 16px;
				font-weight: 900;
				margin-left: 10px;
			}
		}
	}
`;
