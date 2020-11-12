import styled from 'styled-components';

export const Avatar = styled.img`
--space: 10rem;
  position: absolute;
  width: 30rem;
  top: var(---space);
  left: var(---space);
  border-radius: 50%;
  border: 1rem solid var(--color-frontend);
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: tranform 100ms linear, opacity 300ms linear;
 
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: 4px;
  border: 1rem solid var(--color-frontend);
  width:  2500px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;