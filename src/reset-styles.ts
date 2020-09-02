import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

	:root {
		--primary-color: #3f58b3;
		--secondary-color: #428cd3;
		--tertiary-color: #5fd1fe;
		--light-blue: #F2FFFE;
		--light-grey: #ccc;
		--light-black: #3e3e3e;
		--black: #000;
		--grey: #808080;
		--white: #fff;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	body {
		font: 400 14px 'Poppins', sans-serif;
		-webkit-font-smoothing: antialiased;
		overflow-x: hidden;
		background: var(--light-blue);
	}

	input,
	button {
		font: 400 18px 'OpenSans', sans-serif;
	}

	button {
		cursor: pointer;
		background: transparent;
		border: none;
		margin-top: 10px;
		text-align: left;
	}

	a {
		text-decoration: none;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type=number] {
		-moz-appearance: textfield;
	}

	li {
		list-style: none;
	}
`;
