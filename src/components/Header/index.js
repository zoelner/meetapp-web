import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <span>
            <Logo />
          </span>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Everton Zoelner</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <button type="submit">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
