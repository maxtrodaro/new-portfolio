import styled from 'styled-components';

export const Container = styled.section`
	background: var(--light-blue);
	clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);
	margin: 0 auto;
	padding-top: 98px;
	position: relative;
	width: 100%;

	@media (max-width: 767px) {
		clip-path: inherit;
	}

	> section {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 auto;
		max-width: 1200px;
		padding: 100px 0;

		@media (max-width: 767px) {
			padding: 20px;
		}
	}

	img {
		height: auto;
		width: 100%;
	}
`;

export const TextInfo = styled.section`
	align-self: flex-start;
	color: var(--light-black);
	display: block;
	text-align: center;

	@media (max-width: 767px) {
		margin-bottom: 20px;
		flex-basis: 100%;
	}

	h2 {
		font-size: 48px;
		font-weight: 600;
		margin-bottom: 40px;

		@media (max-width: 767px) {
			font-size: 32px;
			text-align: center;
		}
	}

	h3 {
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 20px;

		@media (max-width: 767px) {
			font-size: 22px;
			text-align: center;
		}
	}

	a {
		background: var(--secondary-color);
		border: 0;
		border-radius: 10px;
		color: var(--white);
		font-weight: 500;
		height: 56px;
		line-height: 56px;
		margin-top: 16px;
		padding: 18px 16px;
		text-align: center;
		transition: background-color 0.2s;

		@media (max-width: 767px) {
			display: flex;
			justify-content: center;
			padding: 0;
		}
	}
`;
