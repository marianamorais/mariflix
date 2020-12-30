import styled from 'styled-components';
import container from '../../tools/container';
import MainDescription from '../../pages/Home/components/MainDescription';
import MainTitle from '../../pages/Home/components/MainTitle';
import TitleLabs from '../TitleLabs';

export const Text = styled.div`
  padding-top: 10rem;
 
 ${MainTitle} {
  margin-bottom: 40rem;
 }

 ${TitleLabs} {
   margin-bottom: 20rem;
   max-width: 70%;
 }

 ${MainDescription} {
  max-width: 70%;
 }
`;

export const Banner = styled.section`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;
`;