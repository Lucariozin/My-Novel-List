import * as Styles from '../styles/NovelsStyles';

import { SearchOutline } from 'react-ionicons';
import { NovelItem } from '../components/NovelItem';
import { useEffect, useState } from 'react';
import { api } from '../services/api';

type NovelData = {
  id: number;
  name: string;
  volume: number;
  author: string;
  cover: string;
  sinopse: string;
  genres: string[];
  stars: number;
};

export default function Novels() {
  const [novelsList, setNovelsList] = useState<NovelData[]>([]);

  useEffect(() => {
    api.get('/api.json').then((response) => setNovelsList(response.data));
  }, []);

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
          
          {novelsList.map((novelData) => (
            <NovelItem cover={novelData.cover} stars={novelData.stars} key={novelData.id} />
          ))}

        </Styles.NovelsContainer>

      </Styles.Wrapper>
    </Styles.Container>
  );
}
