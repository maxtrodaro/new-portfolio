import styled from 'styled-components';

export const Container = styled.section `
	align-items: stretch;
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	max-width: 1200px;
	padding: 50px 0;
`

export const Infos = styled.div `
	width: 24%;

	h2, img {
		margin-bottom: 15px;
	}

	ul {
		li{
			align-items: center;
			display: flex;

			svg {
				color: var(--secondary-color);
				height: 25px;
				width: 25px;
			}

			span {
				margin-left: 10px;

				&~ * {
					margin-left: 10px;
				}
			}
		}
	}
`
