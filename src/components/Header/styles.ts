import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 1rem;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  backdrop-filter: blur(0.7rem) brightness(0.7);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 10rem;
  font-size: 2.5rem;
  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 3rem;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4rem;
`;

export const UserImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--gray-200);
  overflow: hidden;
`

export const UserImg = styled.img`
  width: 100%;
  height: 100%;
`;
