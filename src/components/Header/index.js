import styled from "styled-components";
import container from "../../tools/container";
import Button from "../Button";
import LogoMari from "../LogoMari";

export const Header = styled.header`
  background-color: var(--black);
  border-bottom: 1px solid var(--primary);
  padding: 20rem 0;

  @media (max-width: 800px) {
    padding: 15px 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${container}

  @media(max-width: 800px) {
    justify-content: center;

    & > ${LogoMari} {
      height: 35px;
    }

    & > ${Button} {
      background-color: var(--primary);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
    }
  }
`;
