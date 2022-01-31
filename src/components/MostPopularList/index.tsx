import * as Styles from './styles';

import { useRef, LegacyRef, useEffect, useState } from 'react';

import { NovelItem } from '../NovelItem';
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons';
import { api } from '../../services/api';

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

  const scrollRef = useRef();

  function handlePreviousScroll() {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current as unknown as HTMLDivElement;
    scroll.scrollBy(-(window.screen.width / 1.5), 0);
  }

  function handleNextScroll() { 
    if (!scrollRef.current) return;

    const scroll = scrollRef.current as unknown as HTMLDivElement;
    scroll.scrollBy((window.screen.width / 1.5), 0);
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

      <div ref={scrollRef as unknown as LegacyRef<HTMLDivElement> | undefined}>
        <Styles.List>
          
          {popularNovels.map((novelData) => (
            <NovelItem cover={novelData.cover} stars={novelData.stars} key={novelData.id} />
          ))}

        </Styles.List>
      </div>

      <Styles.NextButton onClick={handleNextScroll}>
        <ChevronForwardOutline width="30px" height="30px" color="#f5f5f5" />
      </Styles.NextButton>
      
    </Styles.Container>
  );
}
