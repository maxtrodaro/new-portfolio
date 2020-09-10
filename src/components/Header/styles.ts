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
		width: 100%;
		position: absolute;
		background: #303030;
		top: 70px;
		left: 0;
		transform: translateY(-150%);
		transition: all ease-in-out 0.5s;
	}
	ul {
		align-items: center;
		display: flex;
		justify-content: space-between;

		@media (max-width: 767px) {
			width: 100%;
			float: none;
			flex-wrap: wrap;
		}

		li {
			margin-right: 20px;
			position: relative;

			@media (max-width: 767px) {
				width: 100%;
				flex-wrap: wrap;
				margin: 0;
				padding: 20px;
			}

			h2 {
				color: var(--primary-color);
				cursor: pointer;
				font-size: 24px;

				@media (max-width: 767px) {
					font-size: 18px;
				}
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
