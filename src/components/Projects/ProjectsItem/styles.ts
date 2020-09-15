import styled from 'styled-components';

export const Container = styled.article`
	background: var(--white);
	border-radius: 6px;
	-webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	margin-bottom: 40px;
	padding: 10px 20px 20px;
	width: 32%;

	img {
		display: block;
		margin: auto;
		width: 50%;
		max-width: 100%;
	}

	h2 {
		font-size: 18px;
		text-align: center;

		a {
			color: var(--primary-color);
			text-transform: uppercase;
			letter-spacing: 0.4px;
		}
	}

	span {
		display: block;
		color: var(--primary-color);
		font-size: 12px;
		margin-top: 5px;
		text-align: center;
	}

	p {
		display: none;
	}

	.linkToProject {
		display: block;
		margin-top: 20px;
		text-align: center;

		a {
			color: var(--primary-color);
			font-size: 14px;
			font-weight: 600;
		}
	}
`;
