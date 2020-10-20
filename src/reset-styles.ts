import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

	:root {
		--primary-color: #88CE31;
		--secondary-color: #5EBFE0;
		--tertiary-color: #9aca3c;
		--light-black: #272727;
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
	}

	input,
	button,
	a {
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
