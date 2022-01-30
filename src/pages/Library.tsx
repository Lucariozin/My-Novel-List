import * as Styles from '../styles/LibraryStyles';

import { NovelItem } from '../components/NovelItem';

export default function Library() {
  return (
    <Styles.Container>
      <Styles.FiltersContainer>
        <Styles.FilterItem isActive>Lendo</Styles.FilterItem>
        <Styles.FilterItem>Concluídos</Styles.FilterItem>
        <Styles.FilterItem>Não Lidos</Styles.FilterItem>
        <Styles.FilterItem>Todos</Styles.FilterItem>
      </Styles.FiltersContainer>

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

    </Styles.Container>
  );
}
