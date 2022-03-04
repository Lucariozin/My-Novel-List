import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 20rem;
  height: 3rem;
  padding: 0 0.5rem 0 1rem;
  background-color: var(--gray-50);
  border-radius: 10rem;
`;

export const LargeContainer = styled(Container)`
  max-width: 70rem;
  height: 5rem;
  padding: 0 0.7rem 0 2rem;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 10rem;
  font-size: 1.6rem;
  outline: none;
  background-color: var(--gray-50);
`;

export const LargeSearchInput = styled(SearchInput)`
  font-size: 2rem;
`;

export const Spacing = styled.span`
  display: block;
  width: 0.2rem;
  height: 2rem;
  margin: 0 0.5rem 0 1rem;
  border-radius: 1rem;
  background-color: var(--gray-200);
`;

export const LargeSpacing = styled(Spacing)`
  width: 0.3rem;
  height: 3rem;
  margin: 0 0.8rem 0 1rem;
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const LargeSearchButton = styled(SearchButton)`
  width: 5rem;
  height: 5rem;
`;
