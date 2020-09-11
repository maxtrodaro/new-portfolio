import styled from 'styled-components';

export const Container = styled.section`
	background: var(--light-blue);
	clip-path: polygon(0 0, 100% 0, 100% 103vh, 0 100%);
	margin: 0 auto;
	padding-top: 98px;
	position: relative;
	width: 100%;

	> section {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1200px;
		padding: 50px 0;
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
	flex-basis: 50%;

	h2 {
		font-size: 48px;
		font-weight: 600;
		margin-bottom: 40px;
	}

	h3 {
		font-size: 28px;
		margin-bottom: 20px;
	}
`;

export const Image = styled.section`
	align-items: center;
	display: flex;
	flex-basis: 50%;
`;
