import styled from 'styled-components';

export const Container = styled.ul`
	align-items: center;
	display: flex;

	@media (max-width: 767px) {
		display: none;
	}

	li {
		&:not(:last-child) {
			margin-right: 30px;
		}
	}
`;
