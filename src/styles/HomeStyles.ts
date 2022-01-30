import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(to bottom, transparent 70%, var(--gray-900) 100%), url('/tbate-background.png');
  background-position: center;
  background-size: cover;
`;
