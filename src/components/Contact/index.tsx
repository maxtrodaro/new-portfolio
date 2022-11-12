import React, { memo, useState } from 'react';
import emailjs from 'emailjs-com';
import { TiTick } from 'react-icons/ti';

import Button from '../Button';
import Input from '../Input';
import { Container, Title, Form, Textarea } from './styles';

const Contact = () => {
	const [formSuccess, setFormSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const sendEmail = (e: any) => {
		e.preventDefault();

		setIsLoading(true);

		emailjs
			.sendForm('gmail', 'edu_godoy', e.target, 'user_r6OSRk9ZrkZdX0HfltrLN')
			.then(
				() => {
					setIsLoading(false);
					setFormSuccess(true);
				},
				error => {
					console.log("error", error);
					setIsLoading(false);
					alert("Estamos com um problema no serviço de e-mail. Favor entrar em contato via WhatsApp!");
				},
			);
	};

	const handleCloseForm = () => {
		setFormSuccess(false);
	};

	return (
		<Container id="contato" className={formSuccess ? 'success' : ''}>
			{formSuccess ? (
				<>
					<Title>Mensagem enviada com sucesso!</Title>
					<TiTick />
					<p>
						Informamos que recebemos sua mensagem e vamos respondê-lá assim que
						possível.
					</p>
					<em>Atenciosamente Eduardo Godoy</em>
					<Button type="submit" loading={isLoading} onClick={handleCloseForm}>
						Fechar
					</Button>
				</>
			) : (
				<>
					<Title>
						Vamos trabalhar juntos?
						<br />
						Entre em contato agora!
					</Title>
					<Form onSubmit={sendEmail}>
						<Input type="text" name="name" placeholder="Nome" required />
						<Input type="text" name="email" placeholder="Email" required />
						<Input type="text" name="phone" placeholder="Telefone" required />
						<Textarea name="message" placeholder="Mensagem" required />
						<Button type="submit" loading={isLoading}>
							Enviar contato
						</Button>
					</Form>
				</>
			)}
		</Container>
	);
};

export default memo(Contact);
