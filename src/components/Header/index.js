import styled from "styled-components";
import container from "../../assets/styles/container";
import Button from "../Button";
import MariLogo from "../MariLogo";

export const Header = styled.header`
  background-color: var(--background);
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

    & > ${MariLogo} {
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
