import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.main`
  max-width: 120rem;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 20rem;
  margin-top: 15rem;
`;

export const GenresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  max-width: 80rem;
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 0.2rem;
  margin: 6rem 0;
  background-color: var(--gray-900);
`;

export const NovelsContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 22rem);
  padding: 2rem;
  margin: 7rem 0;
  border-radius: 2rem;
  background-color: var(--gray-900);
`;
