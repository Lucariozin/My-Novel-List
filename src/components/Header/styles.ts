import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 1rem;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  backdrop-filter: blur(0.7rem) brightness(0.8);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
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
  align-items: center;
  gap: 3rem;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  gap: 4rem;

  & a {
    font-size: 1.8rem;
    color: white;
  }
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 20rem;
  height: 3rem;
  padding: 0 0.5rem 0 1rem;
  background-color: var(--gray-50);
  border-radius: 10rem;
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

export const Spacing = styled.span`
  display: block;
  width: 0.2rem;
  height: 2rem;
  margin: 0 0.5rem 0 1rem;
  border-radius: 1rem;
  background-color: var(--gray-200);
`;

export const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
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
