import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin-top: 5rem;
  position: relative;
  backdrop-filter: blur(0.1rem) brightness(0.6);

  & > div {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 3rem;
  text-align: center;
  color: var(--gray-50);
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 0 1rem;
`;

const scrollButton = styled.button`
  width: 6rem;
  height: 6rem;
  position: absolute;
  z-index: 1;
  top: 20rem;
  border: none;
  border-radius: 50%;
  background-color: var(--gray-800);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: filter .2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const PreviousButton = styled(scrollButton)`
  left: 1.5rem;
`;

export const NextButton = styled(scrollButton)`
  right: 1.5rem;
`;
