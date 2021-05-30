import React, { useRef, useCallback } from 'react';

import { Container } from '~/public/styles/global';

import { BudgetContainer } from './style';

import { Input } from '~/components/global/Input';

import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import getValidationErrors from '~/utils/getValidationErrors';

import { useToast } from '~/hooks/toast';

interface SignInFormData {
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  message: string;
}

const Budget = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Informe seu nome.'),
        email: Yup.string()
          .required('Informe seu e-mail.')
          .email('Informe um e-mail válido.'),
        phone: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      addToast({
        type: 'success',
        title: 'Orçamento enviado com sucesso',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao solicitar orçamento',
        description:
          'Ocorreu um erro na comunicação com o servidor, tente novamente.',
      });
    }
  }, []);

  return (
    <BudgetContainer>
      <Container className="budget-container">
        <h1 className="site-default-title">Solicite um orçamento</h1>

        <p>
          Solicite um orçamento preenchendo o <strong>formulário</strong>{' '}
          abaixo.
        </p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="nome" />

          <Input name="email" type="email" placeholder="e-mail" />

          <Input name="phone" type="tel" placeholder="telefone" />

          <button type="submit">Enviar mensagem</button>
        </Form>
      </Container>
    </BudgetContainer>
  );
};

export { Budget };
