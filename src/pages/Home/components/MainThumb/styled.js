import styled from 'styled-components';

export const Avatar = styled.img`
  --space: 10rem;
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 40rem;
  border-radius: 50%;
  border: 2rem solid var(--color-frontend);
  transform: translateX(calc((100% + 10rem) * -1));
  transition: transform 100ms linear;
/* --space: 10rem;
  
  width: 30rem;
  top: var(---space);
  left: var(---space);
  
  
  
  opacity: 0;
  
  */
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  width:  2500px;
  border: 1rem solid var(--color-frontend);
  overflow: hidden;
  cursor: pointer;
  /* border-radius: 4px;
  
  
  overflow: hidden;
  

  &:hover {
    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;