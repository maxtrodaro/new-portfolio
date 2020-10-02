import styled from 'styled-components';

export const Container = styled.section`
	background: var(--white);
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
	padding: 20px 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;

	header {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1200px;

		@media (max-width: 767px) {
			justify-content: center;
		}
	}
`;

export const Logo = styled.section`
	img {
		height: auto;
		width: 100%;
	}
`;

export const Menu = styled.section`
	@media (max-width: 767px) {
		display: none;
	}

	ul {
		align-items: center;
		display: flex;
		justify-content: space-between;

		li {
			line-height: 16px;
			margin-right: 20px;
			position: relative;

			a {
				color: var(--primary-color);
				cursor: pointer;
				font-size: 20px;
				font-weight: 700;
				text-decoration: none;
			}

			svg {
				fill: var(--primary-color);
				height: 22px;
				width: 24px;
			}
		}
	}
`;

export const MenuMobile = styled.section`
	display: none;
	left: 20px;
	padding: 10px 5px;
	position: absolute;
	top: 30px;

	@media (max-width: 767px) {
		display: block;
	}

	span {
		background: var(--primary-color);
		display: block;
		height: 2px;
		position: relative;
		width: 25px;

		&:not(:last-child) {
			margin-bottom: 5px;
		}
	}
`;

export const NavMenuMobile = styled.section`
	background: var(--secondary-color);
	display: block;
	height: 100vh;
	left: 0;
	padding: 0 20px;
	position: absolute;
	top: 0;
	transform: translateX(-150%);
	transition: all ease-in-out 0.5s;
	width: 80%;
	z-index: 1;

	@media (min-width: 767px) {
		display: none;
	}

	div {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 20px 0 20px 10px;

		p {
			color: var(--white);
			font-size: 18px;
			font-weight: 700;
		}

		svg {
			color: var(--white);
			height: 32px;
			width: 34px;
		}
	}

	ul {
		align-items: center;
		display: flex;
		justify-content: space-between;
		width: 100%;
		float: none;
		flex-wrap: wrap;

		li {
			line-height: 16px;
			margin-right: 20px;
			position: relative;
			width: 100%;
			margin: 0;
			padding: 20px 20px 20px 10px;

			a {
				color: var(--white);
				cursor: pointer;
				font-size: 18px;
				font-weight: 700;
				text-decoration: none;
			}

			svg {
				fill: var(--white);
				height: 22px;
				width: 24px;
			}
		}
	}

	&.menuOpen {
		transform: translateX(0%);
	}
`;

export const Overlay = styled.section`
	background: rgba(0, 0, 0, 0.6);
	display: none;
	height: 100vh;
	position: fixed;
	top: 0;
	width: 100%;

	&.menuOpen {
		display: block;
	}
`;
