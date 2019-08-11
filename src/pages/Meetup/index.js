import React, { useState, useEffect } from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdToday,
  MdLocationOn,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Container from '~/components/Container';
import Button from '~/components/Button';

import { ContentHeader, Image, Content, Footer } from './styles';
import api from '~/services/api';

export default function Meetup({ match }) {
  const { id } = match.params;

  const [meetup, setMeetup] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetup() {
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
      setLoading(false);
    }

    loadMeetup();
  });

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
                <Button type="button" color="#4DBAF9">
                  <MdModeEdit />
                  Editar
                </Button>
                <Button type="button">
                  <MdDeleteForever />
                  Cancelar
                </Button>
              </div>
            )}
          </ContentHeader>

          <Image src={meetup.File.url} alt={meetup.title} />
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
