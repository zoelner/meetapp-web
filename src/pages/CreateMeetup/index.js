import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';

import ImageInput from '~/components/ImageInput';

import { Container } from './styles';

const meetup = {};

export default function CreateMeetup() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <ImageInput name="image_id" />

        <Input name="title" placeholder="Titulo do Meetup" />
        <Input
          name="description"
          placeholder="Descrição"
          maxLength={255}
          multiline
        />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />

        <Button type="submit">
          <MdAddCircleOutline /> Salvar Meetup
        </Button>
      </Form>
    </Container>
  );
}
