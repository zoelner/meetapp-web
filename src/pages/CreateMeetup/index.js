import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';

import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';
import ImageInput from '~/components/ImageInput';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('A imagem é obrigatória'),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string()
    .max(255)
    .required('A descrição é obrigatória'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function CreateMeetup() {
  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data);
      toast.success('Meetup criado com sucesso.');

      history.push(`/meetups/${response.data.id}`);
    } catch (error) {
      toast.error('Ocorreu um erro, favor verificar seus dados');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="file_id" />

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
