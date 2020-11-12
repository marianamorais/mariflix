import styled from "styled-components";

const Button = styled.button`
  padding: 9px 25px;
  transition: 0.5s;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  border-radius: 5px;
  display: block;
  cursor: pointer;
  border: 1.5px solid var(--primary);
  background-color: var(--black);
  font-size: 16rem;
  font-weight: 500;

  &:hover,
  &:focus {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.5s cubic-bezier(.25,.8,.25,1);
    background-image: linear-gradient(to right, var(--primary) 0%, var(--color-pink) 51%, var(--primary) 100%);
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
