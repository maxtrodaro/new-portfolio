import styled from 'styled-components';

export const Container = styled.section `
	margin: 0 auto;
	max-width: 900px;
	padding: 50px 0;
	position: relative;
	width: 100%;
`

export const Title = styled.h2`
	color: var(--light-black);
	font-size: 36px;
	margin-bottom: 40px;
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

export const Textarea = styled.textarea`
	border: 2px solid var(--light-black);
	border-radius: 10px;
	color: var(--light-black);
	font: 400 18px 'OpenSans', sans-serif;
	min-height: 100px;
	padding: 16px;
	resize: none;
	width: 100%;

	&::placeholder {
		color: var(--light-black);
	}
`

export const Form = styled.form`
	align-items: center;
	display: flex;
	flex-direction: column;
`
