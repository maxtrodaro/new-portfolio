import styled from 'styled-components';

export const Container = styled.section`
	align-items: stretch;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 0 auto;
	max-width: 1200px;
	padding: 70px 0;
	position: relative;
	width: 100%;

	@media (max-width: 767px) {
		padding: 20px;
	}
`;

export const Image = styled.section`
	opacity: 0.2;
	position: absolute;
	text-align: center;
	z-index: -1;

	img {
		height: auto;
		width: 100%;
	}
`;

export const Partners = styled.section`
	@media (max-width: 767px) {
		width: 100%;
	}

	h2 {
		color: var(--light-black);
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 40px;

		@media (max-width: 767px) {
			font-size: 20px;
			margin-bottom: 20px;
		}
	}

	ul {
		margin-top: 20px;
		li {
			align-items: center;
			display: flex;
			margin-bottom: 10px;

			svg {
				color: var(--primary-color);
				height: 25px;
				width: 25px;
			}

			span {
				font-size: 16px;
				font-weight: 600;
				margin-left: 10px;
			}
		}
	}
`;

export const TextInfo = styled.section`
	align-self: flex-start;
	color: var(--light-black);
	display: block;
	flex-basis: 50%;

	@media (max-width: 767px) {
		flex-basis: 100%;
		margin-bottom: 20px;
	}

	h1 {
		color: var(--light-black);
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 40px;

		@media (max-width: 767px) {
			font-size: 20px;
		}
	}

	h2 {
		color: var(--primary-color);
		font-size: 22px;
		margin-bottom: 20px;

		@media (max-width: 767px) {
			font-size: 18px;
		}
	}

	p {
		color: var(--light-black);
		font-weight: 600;
		font-size: 16px;
		margin-bottom: 20px;
	}

	a {
		color: var(--primary-color);
		font-size: 18px;
		font-weight: 700;
	}

	.item_description {
		color: transparent;
		height: 1px;
		position: fixed;
		transform: translateX(-1000%);
		width: 1px;
	}
`;
