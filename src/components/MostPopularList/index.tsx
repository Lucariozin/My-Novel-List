import * as Styles from './styles';

import { useRef, LegacyRef } from 'react';

import { NovelItem } from '../NovelItem';
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons';

export function MostPopularList() {
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

  return (
    <Styles.Container>
      <Styles.Title>Novels Mais Populares</Styles.Title>

      <Styles.PreviousButton onClick={handlePreviousScroll}>
        <ChevronBackOutline width="30px" height="30px" color="#f5f5f5" />
      </Styles.PreviousButton>

      <div ref={scrollRef as unknown as LegacyRef<HTMLDivElement> | undefined}>
        <Styles.List>
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
          <NovelItem />
          <NovelItem />
          <NovelItem />
        </Styles.List>
      </div>

      <Styles.NextButton onClick={handleNextScroll}>
        <ChevronForwardOutline width="30px" height="30px" color="#f5f5f5" />
      </Styles.NextButton>
      
    </Styles.Container>
  );
}
