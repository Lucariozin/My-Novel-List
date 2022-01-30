import * as Styles from '../styles/NovelsStyles';

import { SearchOutline } from 'react-ionicons';
import { NovelItem } from '../components/NovelItem';

export default function Novels() {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.SearchContainer>
          <Styles.SearchInputContainer>
            <Styles.SearchInput type="text" placeholder="Faça sua busca" />

            <Styles.Spacing />

            <Styles.SearchButton type="button">
              <SearchOutline color="#646464" width="35px" height="35px" />
            </Styles.SearchButton>
          </Styles.SearchInputContainer>

          <Styles.GenresContainer>

            <Styles.GenreItem>Ação</Styles.GenreItem>
            <Styles.GenreItem>Aventura</Styles.GenreItem>
            <Styles.GenreItem>Romance</Styles.GenreItem>
            <Styles.GenreItem>Comédia</Styles.GenreItem>
            <Styles.GenreItem>Fantasia</Styles.GenreItem>
            <Styles.GenreItem>Horror</Styles.GenreItem>
            <Styles.GenreItem>Suspense</Styles.GenreItem>
            <Styles.GenreItem>Mistério</Styles.GenreItem>
            <Styles.GenreItem>Drama</Styles.GenreItem>
            <Styles.GenreItem>Slice of Life</Styles.GenreItem>

          </Styles.GenresContainer>
        </Styles.SearchContainer>

        <Styles.NovelsContainer>
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
          <NovelItem />
        </Styles.NovelsContainer>

      </Styles.Wrapper>
    </Styles.Container>
  );
}
