import * as Styles from './styles';

import { Link } from 'react-router-dom';
import { SearchOutline } from 'react-ionicons';

export function Header() {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Logo>MyNovelList</Styles.Logo>

        <Styles.Nav>

          <Styles.NavLinksContainer>
            <Link to="/">Home</Link>
            <Link to="/novels">Novels</Link>
            <Link to="/library">Biblioteca</Link>
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
