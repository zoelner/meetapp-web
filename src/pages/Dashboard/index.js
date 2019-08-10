import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Container from '~/components/Container';
import Button from '~/components/Button';

import { ContentHeader, List, ListItem } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <ContentHeader>
        <h1>Meus meetups</h1>
        <Button type="button">Novo Meetup</Button>
      </ContentHeader>

      <List>
        <ListItem>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} />
          </div>
        </ListItem>
        <ListItem>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} />
          </div>
        </ListItem>
        <ListItem>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight size={24} />
          </div>
        </ListItem>
      </List>
    </Container>
  );
}
