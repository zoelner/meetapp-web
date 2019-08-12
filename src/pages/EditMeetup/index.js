import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import Button from '~/components/Button';
import DatePicker from '~/components/DatePicker';

import ImageInput from '~/components/ImageInput';

import { Container } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function EditMeetup({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizing/${id}`);
        setMeetup({
          ...response.data,
          date: parseISO(response.data.date),
        });
        setLoading(false);
      } catch (err) {
        toast.error('Meetup não encontrado');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      setLoading(true);
      await api.put(`meetups/${id}`, data);
      toast.success('Meetup atualizado com sucesso!');
      history.push(`/meetups/${id}`);
    } catch (err) {
      toast.error('Ocorreu um erro ao editar, verifique seus dados!');
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <Form initialData={meetup} onSubmit={handleSubmit}>
          <ImageInput name="image" />

          <Input name="title" placeholder="Titulo do Meetup" />
          <Input
            name="description"
            placeholder="Seu endereço de e-mail"
            multiline
          />
          <DatePicker name="date" placeholder="Data" />
          <Input name="location" placeholder="Localização" />

          <Button type="submit">
            <MdAddCircleOutline /> Salvar Meetup
          </Button>
        </Form>
      )}
    </Container>
  );
}
