import * as Styles from '../styles/NovelsStyles';

import { SearchOutline } from 'react-ionicons';
import { NovelItem } from '../components/NovelItem';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { FilterItem } from '../components/FilterItem';
import { SearchInput } from '../components/SearchInput';

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
          
          <SearchInput inputSize="large" type="text" placeholder="Faça sua busca" />

          <Styles.GenresContainer>

            <FilterItem>Ação</FilterItem>
            <FilterItem>Aventura</FilterItem>
            <FilterItem>Romance</FilterItem>
            <FilterItem>Comédia</FilterItem>
            <FilterItem>Fantasia</FilterItem>
            <FilterItem>Horror</FilterItem>
            <FilterItem>Suspense</FilterItem>
            <FilterItem>Mistério</FilterItem>
            <FilterItem>Drama</FilterItem>
            <FilterItem>Slice of Life</FilterItem>

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
