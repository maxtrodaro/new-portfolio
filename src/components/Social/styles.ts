import styled from 'styled-components';

export const Container = styled.ul`
	align-items: center;
	display: flex;

	li {
		line-height: 16px;

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
