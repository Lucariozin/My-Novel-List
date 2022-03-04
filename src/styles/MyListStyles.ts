import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 15rem;
`;

export const NovelsContainer = styled.main`
  display: grid;
  max-width: 120rem;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 22rem);
  padding: 2rem;
  margin: 7rem auto;
  border-radius: 2rem;
  background-color: var(--gray-900);
`;
