import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import Button from '~/components/Button';

const profile = {};

export default function Profile() {
  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <Button type="submit">Salvar perfil</Button>
      </Form>
    </Container>
  );
}
