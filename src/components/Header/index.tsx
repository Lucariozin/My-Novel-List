import * as Styles from './styles';

import { useLocation } from 'react-router-dom';

import { NavLink } from '../NavLink';
import { SearchOutline } from 'react-ionicons';

export function Header() {
  const { pathname } = useLocation();

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Logo>MyNovelsList</Styles.Logo>

        <Styles.Nav>

          <Styles.NavLinksContainer>
            <NavLink to="/" isActive={pathname == '/'}>Home</NavLink>
            <NavLink to="/novels" isActive={pathname == '/novels'}>Novels</NavLink>
            <NavLink to="/mylist" isActive={pathname == '/mylist'}>My List</NavLink>
          </Styles.NavLinksContainer>

          <Styles.SearchInputContainer>
            <Styles.SearchInput type="text" placeholder="Faça sua busca" />

            <Styles.Spacing />

            <Styles.SearchButton type="button">
              <SearchOutline color="#646464" />
            </Styles.SearchButton>
          </Styles.SearchInputContainer>

          <Styles.UserImgContainer>
            <Styles.UserImg
              src="https://github.com/Lucariozin.png"
              alt="Imagem do Usuário"
            />
          </Styles.UserImgContainer>

        </Styles.Nav>
      </Styles.Wrapper>
    </Styles.Container>
  );
}
