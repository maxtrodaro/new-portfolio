import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--light-black);
  padding: 16px;
  width: 100%;
  color: var(--light-black);
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFocused &&
		css`
			color: var(--primary-color);
      border: 2px solid var(--primary-color);
    `}
	${props =>
    props.isFilled &&
		css`
			border: 2px solid var(--primary-color);

			input {
      	color: var(--primary-color) !important;
			}
    `}
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--light-black);
    &::placeholder {
      color: var(--light-black)
    }
  }
  svg {
    margin-right: 16px;
  }
`;
