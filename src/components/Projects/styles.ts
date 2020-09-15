import styled from 'styled-components';

export const Container = styled.section`
	background: var(--light-blue);
	margin: 0 auto;
	position: relative;
	width: 100%;

	section {
		margin: 0 auto;
		max-width: 1200px;
		padding: 50px 0;
	}
`;

export const Title = styled.h2`
	color: var(--light-black);
	font-size: 36px;
	text-align: center;

	&::after {
		background: var(--light-black);
		content: '';
		display: block;
		height: 2px;
		margin: 10px auto 0;
		width: 100px;
	}
`;

export const ProjectContainer = styled.div`
	align-items: flex-start;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
`;
