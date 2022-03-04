import * as Styles from '../styles/MyListStyles';

import { api } from '../services/api';

import { useEffect, useState } from 'react';
import { NovelItem } from '../components/NovelItem';
import { FilterItem } from '../components/FilterItem';

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

export default function MyList() {
  const [novelsList, setNovelsList] = useState<NovelData[]>([]);

  useEffect(() => {
    api.get('/api.json').then((response) => setNovelsList(response.data));
  }, []);

  return (
    <Styles.Container>
      <Styles.FiltersContainer>
        <FilterItem isActive size="large">Lendo</FilterItem>
        <FilterItem size="large">Concluídos</FilterItem>
        <FilterItem size="large">Não Lidos</FilterItem>
        <FilterItem size="large">Todos</FilterItem>
      </Styles.FiltersContainer>

      <Styles.NovelsContainer>
        
        {novelsList.map((novelData) => (
          <NovelItem
            key={novelData.id}
            cover={novelData.cover}
            stars={novelData.stars}
          />
        ))}

      </Styles.NovelsContainer>

    </Styles.Container>
  );
}
