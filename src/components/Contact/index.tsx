import React, { memo } from 'react';
import emailjs from 'emailjs-com';

import Button from '../Button';
import Input from '../Input';
import { Container, Title, Form, Textarea } from './styles';

const Contact = () => {
	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs.sendForm('gmail', 'edu_godoy', e.target, 'user_r6OSRk9ZrkZdX0HfltrLN')
			.then((result) => {
					console.log(result);
			}, (error) => {
					console.log(error);
			});
			e.target.reset();
	}

	return (
		<Container id="contato">
			<Title>Vamos trabalhar juntos?<br />Entre em contato!</Title>
			<Form onSubmit={sendEmail}>
				<Input type="text" name="name" placeholder="Nome" required />
				<Input type="text" name="email" placeholder="Email" required />
				<Input type="text" name="phone" placeholder="Telefone" required />
				<Textarea name="message" placeholder="Mensagem" required />
				<Button type='submit'>Enviar contato</Button>
			</Form>
		</Container>
	)
}

export default memo(Contact);
