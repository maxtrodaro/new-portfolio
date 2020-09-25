import React, {
	InputHTMLAttributes,
	useRef,
	useState,
	useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	icon?: React.ComponentType<IconBaseProps>;
	type: string;
}

const Input: React.FC<InputProps> = ({
	name,
	icon: Icon,
	type,
	...rest
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);

	const handleInputFocus = useCallback(() => {
		setIsFocused(true);
	}, []);

	const handleInputBlur = useCallback(() => {
		setIsFocused(false);

		if (inputRef.current?.value) {
			setIsFilled(true);
		} else {
			setIsFilled(false);
		}
	}, []);

	return (
		<Container
			isFilled={isFilled}
			isFocused={isFocused}
		>
			{Icon && <Icon size={20} />}
			<input
				name={name}
				ref={inputRef}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				type={type}
				{...rest}
			/>
		</Container>
	);
};

export default Input;
