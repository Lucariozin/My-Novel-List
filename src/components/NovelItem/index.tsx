import * as Styles from './styles';

interface NovelItemProps {
  cover: string;
  stars: number;
};

export function NovelItem({ cover, stars }: NovelItemProps) {
  return (
    <Styles.Container>
      <Styles.StarsContainer>
        <Styles.StarImg src="/star.webp" alt="Número de estrelas" />
        {stars}
      </Styles.StarsContainer>

      <Styles.Cover src={cover} alt="Capa da Novel" />
      
    </Styles.Container>
  );
}
