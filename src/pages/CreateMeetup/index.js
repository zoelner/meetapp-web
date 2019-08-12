import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';

import ImageInput from '~/components/ImageInput';

import { Container } from './styles';
import history from '~/services/history';
import api from '~/services/api';

export default function CreateMeetup() {
  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data);
      toast.success('Meetup created successfully!');

      history.push(`/meetups/${response.data.id}`);
    } catch (error) {
      toast.error('Ocorreu um erro, favor verificar seus dados');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
