import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';
import Button from '../Button';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo />
        </Link>

        <aside>
          <Profile>
            <div>
              <strong>Everton Zoelner</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Button type="submit">Sair</Button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
