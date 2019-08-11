import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Container from '~/components/Container';
import Button from '~/components/Button';

import { ContentHeader, List, ListItem } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        parsedDate: format(parseISO(meetup.date), "d 'de' MMMM, 'às' H'h'", {
          locale: pt,
        }),
      }));

      setMeetups(data);
    }

    loadMeetups();
  });

  return (
    <Container>
      <ContentHeader>
        <h1>Meus meetups</h1>
        <Link to="meetups/create">
          <Button type="button">Novo Meetup</Button>
        </Link>
      </ContentHeader>

      <List>
        {meetups.map(meetup => {
          return (
            <Link to={`/meetups/${meetup.id}`}>
              <ListItem>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{meetup.parsedDate}</span>
                  <MdKeyboardArrowRight size={24} />
                </div>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Container>
  );
}
