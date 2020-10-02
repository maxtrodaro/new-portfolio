import styled from 'styled-components';

export const Container = styled.ul`
	align-items: center;
	display: flex;

	li {
		line-height: 16px;

		@media (max-width: 767px) {
			padding: 10px !important;
			width: auto !important;
		}

		&:not(:last-child) {
			margin-right: 20px;
		}

		svg {
			color: var(--primary-color);
			height: 22px;
			width: 24px;
		}
	}
`;
