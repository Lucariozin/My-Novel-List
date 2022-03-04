import * as Styles from './styles';

import { api } from '../../services/api';

import { useRef, useEffect, useState } from 'react';

import { NovelItem } from '../NovelItem';
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons';

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

export function MostPopularList() {
  const [popularNovels, setPopularNovels] = useState<NovelData[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  function handlePreviousScroll() {
    if (!scrollRef.current) return;

    scrollRef.current?.scrollBy(-(window.screen.width / 1.5), 0);
  }

  function handleNextScroll() { 
    if (!scrollRef.current) return;

    scrollRef.current?.scrollBy((window.screen.width / 1.5), 0);
  }

  useEffect(() => {
    api.get('/api.json').then((response) => setPopularNovels(response.data.slice(0, 10)));
  }, []);

  return (
    <Styles.Container>
      <Styles.Title>Novels Mais Populares</Styles.Title>

      <Styles.PreviousButton onClick={handlePreviousScroll}>
        <ChevronBackOutline width="30px" height="30px" color="#f5f5f5" />
      </Styles.PreviousButton>

      <Styles.NovelItemsListContainer ref={scrollRef}>
        <Styles.List>
          
          {popularNovels.map((novelData) => (
            <NovelItem
              cover={novelData.cover}
              stars={novelData.stars}
              key={novelData.id}
            />
          ))}

        </Styles.List>
      </Styles.NovelItemsListContainer>

      <Styles.NextButton onClick={handleNextScroll}>
        <ChevronForwardOutline width="30px" height="30px" color="#f5f5f5" />
      </Styles.NextButton>
      
    </Styles.Container>
  );
}
