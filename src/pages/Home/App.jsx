import React from 'react';

import { Header, Wrapper } from '../../components/Header';
import Logo from '../../components/LogoMari';
import Button from '../../components/Button';

import { Banner, Text } from '../../components/Banner';
import Footer from '../../components/Footer';

import dadosIniciais from '../../data/dados_iniciais.json';
import MainTitle from '../../components/MainTitle';

import TitleLabs from '../../components/TitleLabs';
import MainDescription from '../../components/MainDescription';
import MainThumb from '../../components/MainThumb';

import DesignCourse from '../../assets/img/design-course.png';
import designCourse from '../../assets/img/designcourse.jpg';



function Home() {
  return (
    <>
      <Header>
          <Wrapper>
          <Logo />
          <Button>New video</Button>
        </Wrapper> 
      </Header>

      <Banner>
        <Text>
          <MainTitle>Front-End</MainTitle>
          <TitleLabs>Learning Front-End - The true path</TitleLabs>
          <MainDescription>Learn the basics to build a cool website and get more creativity to create unique things!
          Learn the basics to build a cool website and get more creativity to create unique things!
          Learn the basics to build a cool website and get more creativity to create unique things!
          </MainDescription>
        </Text>

        <MainThumb 
          src={DesignCourse} 
          alt="Design Couse video" 
          avatar ={designCourse}/>
          channelName="Design Course";
      </Banner>

      <Footer />
        
      
{/* 
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}

      
    </>
  );
}

export default Home;
