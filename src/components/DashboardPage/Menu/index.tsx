import {
  Container,
  Header,
  Nav,
} from  './styles';

import { links } from './links';
import { SubMenu } from './SubMenu';

export const Menu = () => {
  return (
    <Container>
      <Header>
        <h1>Bus Admin</h1>
      </Header>
      <Nav>
       {links.map((link) => (
         <SubMenu data={link} />
       ))}
      </Nav>
    </Container>
  );
};
