import styled from 'styled-components';

export const Notfound = styled.section`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	h1 {
		color: var(--light-black);
		font-size: 100px;
	}
	a {
		background: var(--primary-color);
		border-radius: 6px;
		color: var(--white);
		font-weight: 600;
		padding: 20px 10px;
		text-align: center;
		text-transform: uppercase;
		width: 300px;
	}
`;
