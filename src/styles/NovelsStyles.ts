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

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 70rem;
  height: 5rem;
  padding: 0 0.7rem 0 2rem;
  margin: 0 auto;
  background-color: var(--gray-50);
  border-radius: 10rem;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 10rem;
  font-size: 2rem;
  outline: none;
  background-color: var(--gray-50);
`;

export const Spacing = styled.span`
  display: block;
  width: 0.3rem;
  height: 3rem;
  margin: 0 0.8rem 0 1rem;
  border-radius: 1rem;
  background-color: var(--gray-200);
`;

export const SearchButton = styled.button`
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
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

export const GenreItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  border: none;
  cursor: pointer;
  border-radius: 1.5rem;
  font-size: 2rem;
  background-color: var(--gray-900);
  color: var(--gray-50);
  transition: filter .3s ease;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);

  &:hover {
    filter: brightness(0.8);
  }
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
