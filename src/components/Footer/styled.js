import styled from 'styled-components';

export const FooterBase = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  border-top: 1px solid var(--primary);
  padding: 25px 0;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
