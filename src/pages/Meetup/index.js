import React, { useState, useEffect } from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdToday,
  MdLocationOn,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import api from '~/services/api';
import Container from '~/components/Container';
import Button from '~/components/Button';

import { ContentHeader, Image, Content, Footer } from './styles';
import history from '~/services/history';

export default function Meetup({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`organizing/${id}`);

        const data = {
          ...response.data,
          parsedDate: format(
            parseISO(response.data.date),
            "d 'de' MMMM, 'às' H'h'",
            {
              locale: pt,
            }
          ),
        };

        setMeetup(data);
      } catch (err) {
        toast.error('Não foi possivel carregar o meetup');
        history.push('/');
      }
      setLoading(false);
    }

    loadMeetup();
  }, [id]);

  async function handleDelete() {
    try {
      await api.delete(`meetups/${id}`);
      history.push('/');
    } catch (err) {
      toast.error('Ocorreu um erro, não foi possivel remover o meetup');
    }
  }

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ContentHeader>
            <h1>{meetup.title}</h1>
            {!meetup.past && (
              <div>
                <Link to={`/meetups/${id}/edit`}>
                  <Button type="button" color="#4DBAF9">
                    <MdModeEdit />
                    Editar
                  </Button>
                </Link>
                <Button type="button" onClick={handleDelete}>
                  <MdDeleteForever />
                  Cancelar
                </Button>
              </div>
            )}
          </ContentHeader>

          <Image src={meetup.image.url} alt={meetup.title} />
          <Content>{meetup.description}</Content>

          <Footer>
            <span>
              <MdToday size={20} /> {meetup.parsedDate}
            </span>
            <span>
              <MdLocationOn size={20} /> {meetup.location}
            </span>
          </Footer>
        </>
      )}
    </Container>
  );
}
