import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';

import ImageInput from './ImageInput';

import { Container } from './styles';

const meetup = {};

export default function CreateMeetup() {
  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Titulo do Meetup" />
        <Input
          name="description"
          placeholder="Seu endereço de e-mail"
          multiline
        />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">Salvar Meetup</Button>
      </Form>
    </Container>
  );
}
