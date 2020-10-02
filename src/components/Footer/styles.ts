import styled from 'styled-components';

export const Container = styled.section`
	align-items: stretch;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1200px;
	padding: 50px 0;

	@media (max-width: 767px) {
		flex-wrap: wrap;
		padding: 20px;
	}
`;

export const Infos = styled.div`
	width: 26%;

	@media (max-width: 767px) {
		flex-wrap: wrap;
		margin: 20px 0;
		width: 100%;
	}

	&.web-sections {
		width: 15%;

		@media (max-width: 767px) {
			flex-wrap: wrap;
			width: 100%;
		}
	}

	h2,
	img {
		margin-bottom: 15px;
	}

	ul {
		li {
			align-items: center;
			display: flex;

			svg {
				color: var(--secondary-color);
				height: 25px;
				margin-right: 10px;
				width: 25px;
			}

			a {
				color: var(--black);
				font-size: 14px;
				text-decoration: none;
				& ~ * {
					margin-left: 10px;
				}
			}
		}
	}
`;

export const Copyright = styled.p`
	margin: 20px 0;
	text-align: center;

	@media (max-width: 767px) {
		margin: 20px;
	}
`;
