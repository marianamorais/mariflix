import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  color: white;
  border-radius: 2px;
  display: block;
  cursor: pointer;
  border: 1.5px solid var(--green);
  background: none;
  font-size: 14rem;
  font-weight: 500;
  transition: 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    background: var(--green);
    background-position: right center; /* change the direction of the change here */
    text-decoration: none;
}

@media (max-width: 800px) {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--primary);
  border-radius: 0;
  border: 0;
  text-align: center;
}
`;

export default Button;
