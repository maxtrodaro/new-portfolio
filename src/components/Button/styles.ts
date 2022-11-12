import styled from 'styled-components';

export const Container = styled.button`
	background: var(--primary-color);
	border: 0;
	border-radius: 10px;
	color: var(--white);
	font-weight: 700;
	height: 56px;
	margin-top: 16px;
	padding: 0 16px;
	text-align: center;
	transition: background-color 0.2s;

	&:hover {
		background: var(--tertiary-color);
	}

	&.loading {
		border: 2px solid var(--tertiary-color);
		color: transparent;
		position: relative;

		&::before {
			animation: loading 0.7s linear infinite;
			border: 3px solid var(--tertiary-color);
			border-radius: 100%;
			border-top-color: var(--white);
			content: '';
			display: inline-block;
			font-size: 25px;
			height: 1em;
			left: 0;
			margin: -3px auto;
			position: absolute;
			right: 0;
			width: 1em;
		}
	}

	@keyframes loading {
		to {
			transform: rotate(360deg);
		}
	}
`;
