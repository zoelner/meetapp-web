import React from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdToday,
  MdLocationOn,
} from 'react-icons/md';

import Container from '~/components/Container';
import Button from '~/components/Button';

import { ContentHeader, Image, Content, Footer } from './styles';

export default function Details() {
  return (
    <Container>
      <ContentHeader>
        <h1>Meetup de React Native</h1>
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
      </ContentHeader>

      <Image src="" alt="Meetup de React Native" />
      <Content>
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.
        </p>
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
      </Content>

      <Footer>
        <span>
          <MdToday size={20} /> 24 de Junho, às 20h
        </span>
        <span>
          <MdLocationOn size={20} /> Rua Guilherme Gembala, 260
        </span>
      </Footer>
    </Container>
  );
}
