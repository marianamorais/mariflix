import styled from 'styled-components';
import MariLogo from '../MariLogo';

export const FooterBase = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  border-top: 1px solid var(--purple);
  padding: 25px 0;
  color: var(--white);
  text-align: center;

  & > ${MariLogo} {
    height: 15em;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;